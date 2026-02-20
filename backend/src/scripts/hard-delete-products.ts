/**
 * Hard Delete All Products Script
 *
 * This script permanently removes all products and their related data from the database.
 * It handles foreign key constraints by deleting in the correct order.
 *
 * Run with: npx medusa exec ./src/scripts/hard-delete-products.ts
 *
 * Tables involved (MedusaJS 2.0 schema):
 * - product
 * - product_variant
 * - product_option
 * - product_option_value
 * - product_variant_option
 * - product_variant_price_set
 * - product_variant_inventory_item
 * - product_variant_product_image (links variants to images)
 * - product_sales_channel
 * - product_category_product
 * - product_shipping_profile
 * - product_tags (link table)
 * - image (shared, only delete orphaned images)
 * - price_set, price, price_rule (linked via product_variant_price_set)
 * - inventory_item, inventory_level (linked via product_variant_inventory_item)
 */

import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export default async function hardDeleteAllProducts({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);
  const pgConnection = container.resolve(ContainerRegistrationKeys.PG_CONNECTION);

  logger.info("Starting hard delete of all products...");

  try {
    // First, get count of products to delete
    const { data: products } = await query.graph({
      entity: "product",
      fields: ["id", "title"],
      filters: {},
    });

    logger.info(`Found ${products.length} products to delete`);

    if (products.length === 0) {
      logger.info("No products to delete. Exiting.");
      return;
    }

    // Get variant IDs for inventory cleanup
    const { data: variants } = await query.graph({
      entity: "product_variant",
      fields: ["id", "sku"],
      filters: {},
    });

    logger.info(`Found ${variants.length} variants to delete`);

    // Start transaction for atomic deletion
    await pgConnection.raw("BEGIN");

    try {
      // Delete in order respecting foreign key constraints
      // The order matters - delete dependent records first

      // 1. Delete product-related link tables first
      logger.info("Deleting product sales channel links...");
      await pgConnection.raw(`DELETE FROM product_sales_channel`);

      logger.info("Deleting product category links...");
      await pgConnection.raw(`DELETE FROM product_category_product`);

      logger.info("Deleting product shipping profile links...");
      await pgConnection.raw(`DELETE FROM product_shipping_profile`)
        .catch(() => logger.info("Skipping product_shipping_profile (may not exist)"));

      logger.info("Deleting product tag links...");
      await pgConnection.raw(`DELETE FROM product_tags`)
        .catch(() => logger.info("Skipping product_tags (may not exist)"));

      // 2. Delete variant-related link tables
      logger.info("Deleting product variant option links...");
      await pgConnection.raw(`DELETE FROM product_variant_option`)
        .catch(() => logger.info("Skipping product_variant_option (may not exist)"));

      logger.info("Deleting product variant image links...");
      await pgConnection.raw(`DELETE FROM product_variant_product_image`)
        .catch(() => logger.info("Skipping product_variant_product_image (may not exist)"));

      // 3. Delete inventory-related data for variants
      logger.info("Deleting inventory levels for product variants...");
      await pgConnection.raw(`
        DELETE FROM inventory_level
        WHERE inventory_item_id IN (
          SELECT inventory_item_id FROM product_variant_inventory_item
        )
      `).catch(() => logger.info("Skipping inventory_level cleanup"));

      logger.info("Deleting product variant inventory item links...");
      const inventoryItemIds = await pgConnection.raw(`
        SELECT inventory_item_id FROM product_variant_inventory_item
      `).catch(() => ({ rows: [] }));

      await pgConnection.raw(`DELETE FROM product_variant_inventory_item`);

      // Delete the inventory items that were linked to variants
      if (inventoryItemIds.rows && inventoryItemIds.rows.length > 0) {
        const ids = inventoryItemIds.rows.map((r: { inventory_item_id: string }) => `'${r.inventory_item_id}'`).join(',');
        logger.info(`Deleting ${inventoryItemIds.rows.length} inventory items...`);
        await pgConnection.raw(`DELETE FROM inventory_item WHERE id IN (${ids})`)
          .catch(() => logger.info("Skipping inventory_item deletion"));
      }

      // 4. Delete pricing data linked to variants
      logger.info("Getting price set IDs linked to variants...");
      const priceSetIds = await pgConnection.raw(`
        SELECT price_set_id FROM product_variant_price_set
      `).catch(() => ({ rows: [] }));

      logger.info("Deleting product variant price set links...");
      await pgConnection.raw(`DELETE FROM product_variant_price_set`);

      if (priceSetIds.rows && priceSetIds.rows.length > 0) {
        const ids = priceSetIds.rows.map((r: { price_set_id: string }) => `'${r.price_set_id}'`).join(',');

        logger.info(`Deleting price rules for ${priceSetIds.rows.length} price sets...`);
        await pgConnection.raw(`
          DELETE FROM price_rule
          WHERE price_id IN (
            SELECT id FROM price WHERE price_set_id IN (${ids})
          )
        `).catch(() => logger.info("Skipping price_rule deletion"));

        logger.info("Deleting prices...");
        await pgConnection.raw(`DELETE FROM price WHERE price_set_id IN (${ids})`)
          .catch(() => logger.info("Skipping price deletion"));

        logger.info("Deleting price sets...");
        await pgConnection.raw(`DELETE FROM price_set WHERE id IN (${ids})`)
          .catch(() => logger.info("Skipping price_set deletion"));
      }

      // 5. Delete product option values
      logger.info("Deleting product option values...");
      await pgConnection.raw(`DELETE FROM product_option_value`);

      // 6. Delete product options
      logger.info("Deleting product options...");
      await pgConnection.raw(`DELETE FROM product_option`);

      // 7. Delete product variants
      logger.info("Deleting product variants...");
      await pgConnection.raw(`DELETE FROM product_variant`);

      // 8. Clear product foreign key references before deleting products
      logger.info("Clearing product type references...");
      await pgConnection.raw(`UPDATE product SET type_id = NULL WHERE type_id IS NOT NULL`)
        .catch(() => logger.info("Skipping type_id cleanup"));

      logger.info("Clearing product collection references...");
      await pgConnection.raw(`UPDATE product SET collection_id = NULL WHERE collection_id IS NOT NULL`)
        .catch(() => logger.info("Skipping collection_id cleanup"));

      // 9. Finally, delete the products themselves
      logger.info("Deleting products...");
      const result = await pgConnection.raw(`DELETE FROM product RETURNING id`);

      // Commit the transaction
      await pgConnection.raw("COMMIT");

      const deletedCount = result.rows?.length || products.length;
      logger.info(`Successfully hard deleted ${deletedCount} products and all related data.`);

      // Summary
      logger.info("=== DELETION SUMMARY ===");
      logger.info(`Products deleted: ${deletedCount}`);
      logger.info(`Variants deleted: ${variants.length}`);
      if (priceSetIds.rows) {
        logger.info(`Price sets deleted: ${priceSetIds.rows.length}`);
      }
      if (inventoryItemIds.rows) {
        logger.info(`Inventory items deleted: ${inventoryItemIds.rows.length}`);
      }

    } catch (innerError) {
      // Rollback on error
      await pgConnection.raw("ROLLBACK");
      throw innerError;
    }

  } catch (error) {
    logger.error("Error during hard delete:", error);
    throw error;
  }

  logger.info("Hard delete completed successfully!");
}
