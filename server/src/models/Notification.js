const pool = require('../configs/db');

const getNotificationsByUserIdAndType = (userMemberId, type, callback) => {
    let query = 'SELECT * FROM notifications WHERE user_member_id = ?';
    const params = [userMemberId];

    if (type) {
        query += ' AND type = ?';
        params.push(type);
    }

    query += ' ORDER BY created_at DESC';

    pool.query(query, params, (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

const markNotificationAsRead = (notificationId, callback) => {
    const query = 'UPDATE notifications SET status = ? WHERE id = ?';
    pool.query(query, ['read', notificationId], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

module.exports = {
    getNotificationsByUserIdAndType,
    markNotificationAsRead,
};
