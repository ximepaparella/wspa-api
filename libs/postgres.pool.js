const { Pool } = require('pg');

const { config }  = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const PORT = encodeURIComponent(config.dbPort);
const DB_NAME = encodeURIComponent(config.dbName);
const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;

  const pool = new Pool({ connectionString: URI });

module.exports = pool;
