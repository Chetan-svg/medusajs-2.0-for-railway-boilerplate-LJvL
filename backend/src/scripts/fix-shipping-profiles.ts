import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils";

export default async function fixShippingProfiles({ container }: ExecArgs) {
  const logger = container.resolve("logger");
  const link = container.resolve(ContainerRegistrationKeys.LINK);
  const productService = container.resolve(Modules.PRODUCT);
  const fulfillmentService = container.resolve(Modules.FULFILLMENT);
  const pgConnection = container.resolve(
    ContainerRegistrationKeys.PG_CONNECTION
  );

  logger.info("=== Fix Product Shipping Profiles ===");

  // 1. Get shipping profile - try all approaches
  let allProfiles = await fulfillmentService.listShippingProfiles({});
  logger.info(`Found ${allProfiles.length} shipping profiles:`);
  for (const p of allProfiles) {
    logger.info(`  - ${p.name} (${p.id}) type=${p.type}`);
  }

  // Prefer "default" type, then "Default Shipping Profile" by name, then first
  let defaultProfile = allProfiles.find((p: any) => p.type === "default")
    || allProfiles.find((p: any) => p.name === "Default Shipping Profile")
    || allProfiles[0];

  if (!defaultProfile) {
    logger.info("ERROR: No shipping profiles found at all!");
    return;
  }
  logger.info(
    `Using shipping profile: ${defaultProfile.name} (${defaultProfile.id})`
  );

  // 2. Clear any bad manual SQL inserts
  logger.info("Clearing existing product_shipping_profile links...");
  await pgConnection.raw(`DELETE FROM product_shipping_profile`);

  // 3. Get all product IDs
  const products = await productService.listProducts(
    {},
    { take: 10000, select: ["id"] }
  );
  logger.info(`Found ${products.length} products`);

  // 4. Create links in batches using MedusaJS link API
  const batchSize = 100;
  let created = 0;

  for (let i = 0; i < products.length; i += batchSize) {
    const batch = products.slice(i, i + batchSize);
    const linkData = batch.map((product) => ({
      [Modules.PRODUCT]: { product_id: product.id },
      [Modules.FULFILLMENT]: {
        shipping_profile_id: defaultProfile.id,
      },
    }));

    try {
      await link.create(linkData);
      created += batch.length;
      if (created % 500 === 0 || created === products.length) {
        logger.info(`Created ${created}/${products.length} links...`);
      }
    } catch (error: any) {
      logger.error(`Error creating links at batch ${i}: ${error.message}`);
      // Try one by one for failed batch
      for (const singleLink of linkData) {
        try {
          await link.create(singleLink);
          created++;
        } catch (e: any) {
          logger.error(
            `Failed single link: ${JSON.stringify(singleLink)} - ${e.message}`
          );
        }
      }
    }
  }

  // 5. Verify
  const result = await pgConnection.raw(
    `SELECT COUNT(*) as cnt FROM product_shipping_profile WHERE deleted_at IS NULL`
  );
  const count = result.rows?.[0]?.cnt ?? result[0]?.cnt ?? "unknown";
  logger.info(`\nVerification: ${count} links in product_shipping_profile`);
  logger.info("=== Done ===");
}
