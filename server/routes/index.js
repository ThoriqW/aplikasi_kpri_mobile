const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');
const profileRouter = require('./profile.router');
const savingRouter = require('./saving.router');

router.use('/api/v1/users', userRouter);
router.use('/api/v1/profiles', profileRouter);
router.use('/api/v1/savings', savingRouter);

module.exports = router;
