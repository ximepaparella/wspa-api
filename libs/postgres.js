const { Client } = require('pg');


async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'wspa_db_2024',
    database: 'wspa_db',
  });
  await client.connect();
  return client;
}


module.exports = getConnection;
