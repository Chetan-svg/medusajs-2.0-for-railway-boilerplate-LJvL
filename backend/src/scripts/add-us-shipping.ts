import { ExecArgs } from "@medusajs/framework/types";
import { Modules, ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { createShippingOptionsWorkflow } from "@medusajs/medusa/core-flows";

export default async function addUsShipping({ container }: ExecArgs) {
  const fulfillmentService = container.resolve(Modules.FULFILLMENT);
  const regionService = container.resolve(Modules.REGION);
  const stockLocationService = container.resolve(Modules.STOCK_LOCATION);
  const link = container.resolve(ContainerRegistrationKeys.LINK);
  const logger = container.resolve("logger");

  logger.info("=== Adding US Shipping Support ===");

  // 1. Find or verify US region exists
  const regions = await regionService.listRegions({}, { relations: ["countries"] });
  let usRegion = regions.find((r: any) =>
    r.countries?.some((c: any) => c.iso_2 === "us")
  );

  if (!usRegion) {
    logger.info("No region with US found. Please create a region that includes the US country via the admin panel first.");
    logger.info("Existing regions:");
    for (const r of regions) {
      const countries = r.countries?.map((c: any) => c.iso_2).join(", ") || "none";
      logger.info(`  - ${r.name} (${r.id}): ${countries}`);
    }
    return;
  }
  logger.info(`Found US region: ${usRegion.name} (${usRegion.id})`);

  // 2. Find shipping profile (default)
  const profiles = await fulfillmentService.listShippingProfiles({ type: "default" });
  if (!profiles.length) {
    logger.info("ERROR: No default shipping profile found!");
    return;
  }
  const shippingProfile = profiles[0];
  logger.info(`Using shipping profile: ${shippingProfile.name} (${shippingProfile.id})`);

  // 3. Find stock location
  const locations = await stockLocationService.listStockLocations({});
  if (!locations.length) {
    logger.info("ERROR: No stock locations found!");
    return;
  }
  const stockLocation = locations[0];
  logger.info(`Using stock location: ${stockLocation.name} (${stockLocation.id})`);

  // 4. Check if US geo zone already exists in any fulfillment set
  const existingSets = await fulfillmentService.listFulfillmentSets(
    {},
    { relations: ["service_zones", "service_zones.geo_zones", "service_zones.shipping_options"] }
  );

  let usServiceZone: any = null;
  for (const fs of existingSets) {
    for (const sz of fs.service_zones || []) {
      const hasUs = sz.geo_zones?.some((gz: any) => gz.country_code === "us");
      if (hasUs) {
        usServiceZone = sz;
        logger.info(`Found existing service zone with US: ${sz.name} (${sz.id})`);
        break;
      }
    }
    if (usServiceZone) break;
  }

  // 5. If no US service zone exists, create a new fulfillment set with US geo zone
  let serviceZoneId: string;

  if (!usServiceZone) {
    logger.info("Creating new fulfillment set for US/North America...");
    const fulfillmentSet = await fulfillmentService.createFulfillmentSets({
      name: "US Warehouse delivery",
      type: "shipping",
      service_zones: [
        {
          name: "United States",
          geo_zones: [
            {
              country_code: "us",
              type: "country",
            },
          ],
        },
      ],
    });

    serviceZoneId = fulfillmentSet.service_zones[0].id;
    logger.info(`Created fulfillment set: ${fulfillmentSet.id}`);
    logger.info(`Created service zone: ${serviceZoneId}`);

    // Link fulfillment set to stock location
    await link.create({
      [Modules.STOCK_LOCATION]: {
        stock_location_id: stockLocation.id,
      },
      [Modules.FULFILLMENT]: {
        fulfillment_set_id: fulfillmentSet.id,
      },
    });
    logger.info("Linked fulfillment set to stock location");

    // Link fulfillment provider to stock location (manual_manual)
    try {
      await link.create({
        [Modules.STOCK_LOCATION]: {
          stock_location_id: stockLocation.id,
        },
        [Modules.FULFILLMENT]: {
          fulfillment_provider_id: "manual_manual",
        },
      });
      logger.info("Linked manual fulfillment provider to stock location");
    } catch (e: any) {
      logger.info("Fulfillment provider link may already exist (ok to skip): " + e.message);
    }
  } else {
    serviceZoneId = usServiceZone.id;
    // Check if shipping options already exist for this zone
    if (usServiceZone.shipping_options?.length > 0) {
      logger.info("US service zone already has shipping options:");
      for (const so of usServiceZone.shipping_options) {
        logger.info(`  - ${so.name} (${so.id}) | Profile: ${so.shipping_profile_id}`);
      }
      logger.info("Checking if profiles match...");
      const hasCorrectProfile = usServiceZone.shipping_options.some(
        (so: any) => so.shipping_profile_id === shippingProfile.id
      );
      if (hasCorrectProfile) {
        logger.info("Shipping options with correct profile already exist. Issue may be elsewhere.");
        logger.info("Run 'npx medusa exec src/scripts/diagnose-shipping' for full diagnostics.");
        return;
      }
      logger.info("Existing options have wrong shipping profile. Adding new options...");
    }
  }

  // 6. Create shipping options for US
  logger.info("Creating shipping options for US...");
  await createShippingOptionsWorkflow(container).run({
    input: [
      {
        name: "Standard Shipping",
        price_type: "flat",
        provider_id: "manual_manual",
        service_zone_id: serviceZoneId,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: "Standard",
          description: "Ship in 5-7 business days.",
          code: "standard",
        },
        prices: [
          {
            currency_code: "usd",
            amount: 10,
          },
          {
            region_id: usRegion.id,
            amount: 10,
          },
        ],
        rules: [
          {
            attribute: "enabled_in_store",
            value: "true",
            operator: "eq",
          },
          {
            attribute: "is_return",
            value: "false",
            operator: "eq",
          },
        ],
      },
      {
        name: "Express Shipping",
        price_type: "flat",
        provider_id: "manual_manual",
        service_zone_id: serviceZoneId,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: "Express",
          description: "Ship in 1-2 business days.",
          code: "express",
        },
        prices: [
          {
            currency_code: "usd",
            amount: 25,
          },
          {
            region_id: usRegion.id,
            amount: 25,
          },
        ],
        rules: [
          {
            attribute: "enabled_in_store",
            value: "true",
            operator: "eq",
          },
          {
            attribute: "is_return",
            value: "false",
            operator: "eq",
          },
        ],
      },
    ],
  });

  logger.info("=== US Shipping Support Added Successfully ===");
  logger.info("Standard Shipping: $10 (5-7 business days)");
  logger.info("Express Shipping: $25 (1-2 business days)");
  logger.info("US customers should now be able to checkout.");
}
