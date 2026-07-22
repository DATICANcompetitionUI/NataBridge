import { Pool } from "pg";

const pool = new Pool({
    database: process.env.db_name,
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
});

export default pool;