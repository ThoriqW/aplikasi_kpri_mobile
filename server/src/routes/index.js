const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');
const profileRouter = require('./profile.router');


router.use('/api/v1/users', userRouter);
router.use('/api/v1/profiles', profileRouter);

module.exports = router;
