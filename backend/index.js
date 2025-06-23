// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rutas
const loginAlumnoRoutes = require('./routes/alumno/loginRoutes');
const loginAdminRoutes = require('./routes/admin/loginRoutes');

app.use('/api/alumnos', loginAlumnoRoutes);
app.use('/api/admin', loginAdminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
