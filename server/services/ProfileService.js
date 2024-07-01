const { Notification } = require('../models');

const getNotificationByUserId = async (userId) => {
  try {
    const notification = await Notification.findOne({
      where: { user_id: userId },
    });

    if (!notification) {
      throw {
        code: 404,
        status: 'NOT_FOUND',
        message: 'Notification not found'
      };
    }

    const notificationData = notification.toJSON();

    const responseNotification = {
      id: notificationData.id,
      user_id: notificationData.user_id,
      type: notificationData.type,
      title: notificationData.title,
      body: notificationData.body,
      status: notificationData.status,
    };

    return {
      code: 200,
      status: 'SUCCESS',
      message: 'Notification retrieved successfully',
      notification: responseNotification
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
  getNotificationByUserId,
};
