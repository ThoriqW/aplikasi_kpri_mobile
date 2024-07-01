const NotificationService = require('../services/NotificationService');

const getNotificationsByUserId = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const result = await NotificationService.getNotificationsByUserId(userId);
        res.status(result.code).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getNotificationsByUserId,
};
