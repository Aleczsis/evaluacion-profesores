// backend/db/connection.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Ana_123@2025',  // Cambia aquí tu contraseña
  database: 'evaluacion_docente',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
