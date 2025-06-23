const db = require('../../db/connection');

async function findAdminByMatricula(matricula) {
  const [rows] = await db.execute('SELECT * FROM administradores WHERE matricula = ?', [matricula]);
  return rows[0];
}

module.exports = {
  findAdminByMatricula
};
