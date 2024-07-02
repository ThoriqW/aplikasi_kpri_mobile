const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');
const profileRouter = require('./profile.router');
const savingRouter = require('./saving.router');
const billRouter =  require('./bill.router');
const notificationRouter = require('./notification.router');
const bannerRouter = require('./banner.router');

router.use('/api/v1/users', userRouter);
router.use('/api/v1/profiles', profileRouter);
router.use('/api/v1/savings', savingRouter);
router.use('/api/v1/bills', billRouter);
router.use('/api/v1/notifications', notificationRouter);
router.use('/api/v1/banners', bannerRouter);

module.exports = router;
