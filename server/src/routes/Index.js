const express = require('express');
const router = express.Router();
const userRoutes = require('./UserRoutes');

// Tambahkan rute lain di sini jika ada
router.use('/users', userRoutes);

module.exports = router;
