import { Pool } from 'pg';

let conn: any;

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE}`;

conn = new Pool({
  connectionString: isProduction
    ? process.env.DATABASE_URL
    : connectionString, ssl: { rejectUnauthorized: false },
});

export { conn };
