// backend/models/usuarioModel.js
const db = require('../../db/connection');

// Busca al usuario por matrícula
async function findUserByMatricula(matricula) {
  const [rows] = await db.execute('SELECT * FROM usuarios WHERE matricula = ?', [matricula]);
  return rows[0];
}

module.exports = {
  findUserByMatricula
};
