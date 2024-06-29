const express = require('express');
const router = express.Router();
const userRoutes = require('./UserRoutes');
const profileRoutes = require('./ProfileRoutes');


// Tambahkan rute lain di sini jika ada
router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;
