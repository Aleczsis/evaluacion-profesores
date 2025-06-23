const { findAdminByMatricula } = require('../../models/admin/usuarioModels');

async function loginAdmin(req, res) {
  try {
    const { matricula, contraseña } = req.body;

    if (!matricula || !contraseña) {
      return res.status(400).json({ error: 'Falta matrícula o contraseña' });
    }

    const usuario = await findAdminByMatricula(matricula);

    if (!usuario) {
      return res.status(401).json({ error: 'Administrador no encontrado' });
    }

    if (contraseña !== usuario.contraseña) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.json({
      message: 'Login exitoso',
      usuario: {
        id: usuario.id_usuario,
        matricula: usuario.matricula,
        rol: usuario.rol
      }
    });

  } catch (error) {
    console.error('Error en login admin:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  loginAdmin
};
