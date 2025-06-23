const express = require('express');
const router = express.Router();

// IMPORTACIÓN CORRECTA con destructuring
const { loginAlumno } = require('../../controllers/alumno/loginController');

// loginAlumno debe ser una función
router.post('/login', loginAlumno);

module.exports = router;
