const express = require('express');
const router = express.Router();
const userRoutes = require('./UserRoutes');
const profileRoutes = require('./ProfileRoutes');

router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;
