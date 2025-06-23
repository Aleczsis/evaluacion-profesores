const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../../controllers/admin/loginController');

router.post('/login', loginAdmin);

module.exports = router;
