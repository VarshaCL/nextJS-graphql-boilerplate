/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');

dotenv.config();
function getOrmConfiguration() {
  const connectionConfig = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
  };

  return connectionConfig;
}

module.exports = getOrmConfiguration();
