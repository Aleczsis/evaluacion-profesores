// backend/controllers/alumno/loginController.js

const { findUserByMatricula } = require('../../models/alumno/usuarioModels');

async function loginAlumno(req, res) {
  try {
    const { matricula, contraseña } = req.body;

    if (!matricula || !contraseña) {
      return res.status(400).json({ error: 'Faltan matrícula o contraseña' });
    }

    const usuario = await findUserByMatricula(matricula);

    if (!usuario) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    if (contraseña !== usuario.contraseña) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.json({
      message: 'Login exitoso',
      usuario: {
        id: usuario.id,
        matricula: usuario.matricula,
        rol: usuario.rol
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  loginAlumno
};
