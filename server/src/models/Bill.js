const pool = require('../config/db');

const getBillsByUserId = (userId, callback) => {
    const query = `
        SELECT * FROM bills
        WHERE user_member_id = ?
    `;
    pool.query(query, [userId], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

module.exports = {
    getBillsByUserId,
};
