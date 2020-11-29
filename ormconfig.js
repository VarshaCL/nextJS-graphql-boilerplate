/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');

dotenv.config();
function getOrmConfiguration() {
  const shouldExecuteMigration = process.env.RUN_MIGRATION
    ? JSON.parse(process.env.RUN_MIGRATION)
    : false;
  // Used for CODE EXECUTION
  const execSpecificConfig = {
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migration/*.js'],
  };

  // Used for MIGRATION ONLY
  const cliSpecificConfig = {
    entities: ['src/**/*.entity.ts'],
    migrations: ['db/migration/*.ts'],
  };

  const connectionConfig = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: shouldExecuteMigration
      ? cliSpecificConfig.entities
      : execSpecificConfig.entities,
    migrations: shouldExecuteMigration
      ? cliSpecificConfig.migrations
      : execSpecificConfig.migrations,
    synchronize: false,
    logging: true,
    cli: {
      migrationsDir: 'db/migrations',
    },
  };

  return connectionConfig;
}

module.exports = getOrmConfiguration();
