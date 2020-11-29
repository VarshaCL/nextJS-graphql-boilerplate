/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');

dotenv.config();
export const config = () => ({
  port: process.env.PORT,
});
