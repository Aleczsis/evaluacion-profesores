const db = require('../../db/connection');

// Busca al alumno por matrícula
async function findUserByMatricula(matricula) {
  const [rows] = await db.execute('SELECT * FROM alumnos WHERE matricula = ?', [matricula]);
  return rows[0];
}

module.exports = {
  findUserByMatricula
};
