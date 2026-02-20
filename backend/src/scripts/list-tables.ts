import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export default async function listTables({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const pgConnection = container.resolve(ContainerRegistrationKeys.PG_CONNECTION);

  const result = await pgConnection.raw(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    AND (
      table_name LIKE '%product%'
      OR table_name LIKE '%image%'
      OR table_name LIKE '%inventory%'
      OR table_name LIKE '%price%'
    )
    ORDER BY table_name
  `);

  logger.info("Relevant tables in database:");
  result.rows.forEach((r: { table_name: string }) => {
    logger.info(`  - ${r.table_name}`);
  });
}
