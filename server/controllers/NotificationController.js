const NotificationService = require('../services/NotificationService');

const getNotificationByUserId = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const result = await NotificationService.getNotificationByUserId(userId);
        res.status(result.code).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getNotificationByUserId,
};
