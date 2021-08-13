import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

import * as models from './models';

dotenv.config();

const sequelize = new Sequelize(
  (process.env.NODE_ENV === 'test' ? `${process.env.DB_NAME}-test` : process.env.DB_NAME) || '',
  process.env.DB_USER || '',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    models: Object.values(models),
    logging: false,
  }
);

export default sequelize;
