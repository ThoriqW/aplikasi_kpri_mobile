const pool = require('../config/db');

const getUserByNIP = (nip, callback) => {
    pool.query('SELECT * FROM user_members WHERE nip = ?', [nip], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results[0]);
    });
};

const addUser = (user, callback) => {
    pool.query('INSERT INTO user_members (nip, password) VALUES (?, ?)', [user.nip, user.password], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

module.exports = {
    getUserByNIP,
    addUser,
};