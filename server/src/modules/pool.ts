import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  database: 'todo-app',
  password: 'db',
  port: 5432,
  idleTimeoutMillis: 30000,
  max: 40,
});

export default pool;
