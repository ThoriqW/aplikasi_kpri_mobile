const pool = require('../config/db');

const getProfileByUserId = (userId, callback) => {
    pool.query('SELECT * FROM member_profiles WHERE user_member_id = ?', [userId], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results[0]);
    });
};

module.exports = {
    getProfileByUserId,
};
