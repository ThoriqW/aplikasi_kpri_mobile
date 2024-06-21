const pool = require('../config/db');

const getBalanceSavingByUserId = (userId, callback) => {
    pool.query('SELECT * FROM balance_savings WHERE user_member_id = ?', [userId], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results[0]); // Assuming you want to return a single record per user
    });
};

module.exports = {
    getBalanceSavingByUserId,
};
