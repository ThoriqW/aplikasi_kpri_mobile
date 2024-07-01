const { Notification } = require('../models');

const getNotificationsByUserId = async (userId) => {
  try {
    const notifications = await Notification.findAll({
      where: { user_id: userId },
    });

    if (notifications.length === 0) {
      throw {
        code: 404,
        status: 'NOT_FOUND',
        message: 'Notifications not found'
      };
    }

    const responseNotifications = notifications.map(notification => {
      const notificationData = notification.toJSON();
      return {
        id: notificationData.id,
        user_id: notificationData.user_id,
        type: notificationData.type,
        title: notificationData.title,
        body: notificationData.body,
        status: notificationData.status,
      };
    });

    return {
      code: 200,
      status: 'SUCCESS',
      message: 'Notifications retrieved successfully',
      notifications: responseNotifications
    };
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      throw {
        code: 400,
        status: 'VALIDATION_ERROR',
        message: 'Validation error',
        errors: error.errors.map(err => ({
          field: err.path,
          message: err.message
        }))
      };
    }
    throw {
      code: 500,
        status: 'SERVER_ERROR',
        message: error.message || 'Internal server error'
    };
  }
};

module.exports = {
  getNotificationsByUserId,
};
