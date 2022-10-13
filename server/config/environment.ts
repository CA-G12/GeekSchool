import dotenv from 'dotenv';

dotenv.config();

const {
  DEV_DB_URL,
  TEST_DB_URL,
  DATABASE_URL,
  NODE_ENV,
  SECRET_KEY,
} = process.env;

const envVars = {
  dbDev: DEV_DB_URL,
  dbTest: TEST_DB_URL,
  dbProduction: DATABASE_URL,
  nodeEnv: NODE_ENV,
  secretKey: SECRET_KEY,
};

export default envVars;
