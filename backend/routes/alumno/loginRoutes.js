// backend/routes/alumno/loginRoutes.js
const express = require('express');
const router = express.Router();
const { loginAlumno } = require('../../controllers/alumno/loginController');

router.post('/login', loginAlumno);

module.exports = router;
