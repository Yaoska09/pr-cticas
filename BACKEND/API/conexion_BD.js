const { Pool } = require('pg');


// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: 'shefa',
  host: 'localhost',
  database: 'prueba_bd',
  password: 'a12345',
  port: 5432
  });
  
  module.exports = pool;
  