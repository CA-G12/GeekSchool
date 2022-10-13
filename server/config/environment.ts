import dotenv from 'dotenv';

dotenv.config();

const {
  DEV_DB_URL,
  TEST_DB_URL,
  DATABASE_URL,
  NODE_ENV,
} = process.env;

let connectionString: string | undefined = '';
let ssl: boolean | object = false;

if (NODE_ENV === 'development') {
  connectionString = DEV_DB_URL;
} else if (NODE_ENV === 'test') {
  connectionString = TEST_DB_URL;
} else if (NODE_ENV === 'production') {
  connectionString = DATABASE_URL;
  ssl = {
    rejectAuthorization: false,
  };
} else {
  throw new Error('Invalid NODE_ENV variable or not given at all.');
}

if (!connectionString) {
  throw new Error('Database url is not a valid postgres connection url.');
}

export default {
  connectionString,
  ssl,
};
