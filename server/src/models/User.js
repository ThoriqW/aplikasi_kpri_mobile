const pool = require('../config/db');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const getUserByNIP = (nip, callback) => {
    pool.query('SELECT * FROM user_members WHERE nip = ?', [nip], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results[0]);
    });
};

const addUser = (user, callback) => {
    bcrypt.hash(user.password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return callback(err);
        }
        user.password = hashedPassword;

        pool.query('INSERT INTO user_members (nip, password) VALUES (?, ?)', [user.nip, user.password], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    });
};

module.exports = {
    getUserByNIP,
    addUser
};
