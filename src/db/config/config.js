// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = process.env;

module.exports = {
  dialect: 'postgres',
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: (process.env.NODE_ENV === 'test' ? `${process.env.DB_NAME}-test` : process.env.DB_NAME) || '',
  port: DB_PORT,
  logging: false,
  define: {
    freezeTableName: true,
  },
  sync: false,
};
