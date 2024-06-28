const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginUser = (req, res) => {
    const { nip, password } = req.body;

    if (!nip || !password) {
        return res.status(400).json({
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
            console.error('Error fetching user:', error);
            return res.status(500).json({
                code: 500,
                status: 'DATABASE_ERROR',
                message: 'Database error occurred'
            });
        }
        if (!user) {
            console.log('User not found for NIP:', nip);
            return res.status(404).json({
                code: 404,
                status: 'NOT_FOUND',
                message: 'User not found'
            });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({
                    code: 500,
                    status: 'SERVER_ERROR',
                    message: 'Error comparing passwords'
                });
            }
            if (!result) {
                console.log('Invalid password for user:', nip);
                return res.status(401).json({
                    code: 401,
                    status: 'INVALID_CREDENTIALS',
                    message: 'Invalid credentials'
                });
            }

            const token = jwt.sign({ id: user.id, nip: user.nip }, 'secret_key', { expiresIn: '1h' });
            res.status(200).json({
                code: 200,
                status: 'SUCCESS',
                message: 'Login successful',
                data: {
                    token,
                    user: {
                        id: user.id,
                        nip: user.nip,
                        // Tambahkan informasi lain yang ingin dikembalikan
                    }
                }
            });
        });
    });
};

const addUser = (req, res) => {
    const { nip, password } = req.body;

    if (!nip || !password) {
        return res.status(400).json({
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
            console.error('Error hashing password:', err);
            return res.status(500).json({
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
                console.error('Error adding user:', error);
                return res.status(500).json({
                    code: 500,
                    status: 'DATABASE_ERROR',
                    message: 'Database error occurred'
                });
            }
            res.status(201).json({
                code: 201,
                status: 'CREATED',
                message: 'User added successfully',
                userId: result.insertId
            });
        });
    });
};

module.exports = {
    loginUser,
    addUser
};
