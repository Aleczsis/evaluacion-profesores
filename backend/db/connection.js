const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '100.106.39.85',     // IP del servidor remoto
  user: 'usuario',           // Usuario MySQL remoto
  password: '148647',        // Contraseña del usuario
  database: 'evaluacion_docente',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;

