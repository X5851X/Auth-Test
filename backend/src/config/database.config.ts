import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => {
    const host = process.env.DB_HOST ?? 'localhost';
    const port = parseInt(process.env.DB_PORT ?? '3306', 10);
    const username = process.env.DB_USERNAME ?? 'root';
    const password = process.env.DB_PASSWORD ?? 'password';
    const database = process.env.DB_NAME ?? 'auth_db';

    if (isNaN(port)) {
      throw new Error('DB_PORT must be a valid number');
    }

    return {
      type: 'mysql',
      host,
      port,
      username,
      password,
      database,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Set to true for Railway deployment
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    };
  },
);