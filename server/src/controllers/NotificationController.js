const Notification = require('../models/notification');

const getNotificationsByUserIdAndType = (req, res) => {
    const userMemberId = req.params.userMemberId;
    const type = req.query.type;

    console.log('Fetching notifications for user:', userMemberId, 'with type:', type);

    Notification.getNotificationsByUserIdAndType(userMemberId, type, (error, notifications) => {
        if (error) {
            console.error('Error fetching notifications:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        if (notifications.length === 0) {
            console.log('No notifications found for user ID:', userMemberId, 'with type:', type);
            return res.status(404).json({ error: 'No notifications found' });
        }
        res.status(200).json(notifications);
    });
};

const markNotificationAsRead = (req, res) => {
    const notificationId = req.params.notificationId;

    Notification.markNotificationAsRead(notificationId, (error, result) => {
        if (error) {
            console.error('Error updating notification status:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.affectedRows === 0) {
            console.log('Notification not found for ID:', notificationId);
            return res.status(404).json({ error: 'Notification not found' });
        }
        res.status(200).json({ message: 'Notification marked as read' });
    });
};

module.exports = {
    getNotificationsByUserIdAndType,
    markNotificationAsRead,
};
