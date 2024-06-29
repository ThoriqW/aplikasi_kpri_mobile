// services/AuthService.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = (nip, password) => {
    return new Promise((resolve, reject) => {
        if (!nip || !password) {
            return reject({
                code: 400,
                status: 'BAD_REQUEST',
                errors: {
                    nip: nip ? [] : ['NIP is required'],
                    password: password ? [] : ['Password is required']
                }
            });
        }

        User.getUserByNIP(nip, (error, user) => {
            if (error) {
                return reject({
                    code: 500,
                    status: 'DATABASE_ERROR',
                    message: 'Database error occurred'
                });
            }
            if (!user) {
                return reject({
                    code: 404,
                    status: 'NOT_FOUND',
                    message: 'User not found'
                });
            }

            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return reject({
                        code: 500,
                        status: 'SERVER_ERROR',
                        message: 'Error comparing passwords'
                    });
                }
                if (!result) {
                    return reject({
                        code: 401,
                        status: 'INVALID_CREDENTIALS',
                        message: 'Invalid credentials'
                    });
                }

                const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });

                // Update token di basis data
                User.updateToken(user.id, token, (updateError, updateResult) => {
                    if (updateError) {
                        return reject({
                            code: 500,
                            status: 'DATABASE_ERROR',
                            message: 'Error updating token'
                        });
                    }

                    resolve({
                        code: 200,
                        status: 'SUCCESS',
                        message: 'Login successful',
                        token,
                        id: user.id
                    });
                });
            });
        });
    });
};

const addUser = (nip, password) => {
    return new Promise((resolve, reject) => {
        if (!nip || !password) {
            return reject({
                code: 400,
                status: 'BAD_REQUEST',
                errors: {
                    nip: nip ? [] : ['NIP is required'],
                    password: password ? [] : ['Password is required']
                }
            });
        }

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                return reject({
                    code: 500,
                    status: 'HASHING_ERROR',
                    message: 'Error hashing password'
                });
            }

            const newUser = {
                nip,
                password: hashedPassword
            };

            User.addUser(newUser, (error, result) => {
                if (error) {
                    return reject({
                        code: 500,
                        status: 'DATABASE_ERROR',
                        message: 'Database error occurred'
                    });
                }
                resolve({
                    code: 201,
                    status: 'CREATED',
                    message: 'User added successfully',
                    userId: result.insertId
                });
            });
        });
    });
};

module.exports = {
    login,
    addUser
};
