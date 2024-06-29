const pool = require('../configs/db');

const getActiveBanners = (callback) => {
    const query = 'SELECT * FROM banners WHERE status = ? ORDER BY created_at DESC';
    pool.query(query, ['active'], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

module.exports = {
    getActiveBanners,
};
