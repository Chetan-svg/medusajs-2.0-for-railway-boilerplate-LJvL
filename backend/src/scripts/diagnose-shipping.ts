import { ExecArgs } from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";

export default async function diagnoseShipping({ container }: ExecArgs) {
  const fulfillmentService = container.resolve(Modules.FULFILLMENT);
  const regionService = container.resolve(Modules.REGION);
  const productService = container.resolve(Modules.PRODUCT);
  const logger = container.resolve("logger");

  logger.info("=== SHIPPING DIAGNOSTICS ===");

  // 1. Check regions
  logger.info("\n--- REGIONS ---");
  const regions = await regionService.listRegions({}, { relations: ["countries"] });
  for (const region of regions) {
    const countryCodes = region.countries?.map((c: any) => c.iso_2).join(", ") || "none";
    logger.info(`Region: ${region.name} (${region.id}) | Currency: ${region.currency_code} | Countries: ${countryCodes}`);
  }

  // 2. Check shipping profiles
  logger.info("\n--- SHIPPING PROFILES ---");
  const profiles = await fulfillmentService.listShippingProfiles({});
  for (const profile of profiles) {
    logger.info(`Profile: ${profile.name} (${profile.id}) | Type: ${profile.type}`);
  }

  // 3. Check fulfillment sets and service zones
  logger.info("\n--- FULFILLMENT SETS & SERVICE ZONES ---");
  const fulfillmentSets = await fulfillmentService.listFulfillmentSets(
    {},
    { relations: ["service_zones", "service_zones.geo_zones"] }
  );
  for (const fs of fulfillmentSets) {
    logger.info(`Fulfillment Set: ${fs.name} (${fs.id})`);
    for (const sz of fs.service_zones || []) {
      const geoZones = sz.geo_zones?.map((gz: any) => gz.country_code).join(", ") || "none";
      logger.info(`  Service Zone: ${sz.name} (${sz.id}) | Geo Zones: ${geoZones}`);
    }
  }

  // 4. Check shipping options
  logger.info("\n--- SHIPPING OPTIONS ---");
  const shippingOptions = await fulfillmentService.listShippingOptions({});
  for (const so of shippingOptions) {
    logger.info(`Option: ${so.name} (${so.id}) | Profile: ${so.shipping_profile_id} | Zone: ${so.service_zone_id} | Provider: ${so.provider_id}`);
  }

  // 5. Check products and their shipping profiles
  logger.info("\n--- PRODUCTS (first 10) ---");
  const products = await productService.listProducts({}, { take: 10 });
  for (const product of products) {
    logger.info(`Product: ${product.title} (${product.id})`);
  }

  // 6. Check stock locations
  const stockLocationService = container.resolve(Modules.STOCK_LOCATION);
  logger.info("\n--- STOCK LOCATIONS ---");
  const locations = await stockLocationService.listStockLocations({});
  for (const loc of locations) {
    logger.info(`Location: ${loc.name} (${loc.id})`);
  }

  logger.info("\n=== DIAGNOSTICS COMPLETE ===");
}
