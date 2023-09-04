const { Pool } = require('pg');

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'wspa_db_2024',
    database: 'wspa_db',
  });

module.exports = pool;
