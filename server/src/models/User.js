const pool = require('../configs/db');

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

const updateToken = (id, token, callback) => {
    pool.query('UPDATE user_members SET current_token = ? WHERE id = ?', [token, id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

const getUserById = (id, callback) => {
    pool.query('SELECT * FROM user_members WHERE id = ?', [id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results[0]);
    });
};

module.exports = {
    getUserByNIP,
    addUser,
    updateToken,
    getUserById
};
