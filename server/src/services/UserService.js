const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (nip, password) => {
    if (!nip || !password) {
        throw {
            code: 400,
            status: 'BAD_REQUEST',
            errors: {
                nip: nip ? [] : ['NIP is required'],
                password: password ? [] : ['Password is required'],
            },
        };
    }

    try {
        const user = await User.findOne({ where: { nip } });

        if (!user) {
            throw {
                code: 404,
                status: 'NOT_FOUND',
                message: 'User not found',
            };
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw {
                code: 401,
                status: 'INVALID_CREDENTIALS',
                message: 'Invalid credentials',
            };
        }

        const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });

        return {
            code: 200,
            status: 'SUCCESS',
            message: 'Login successful',
            token,
            id: user.id,
        };

    } catch (error) {
        if (error.code) {
            throw error; // Rethrow the error if it already has a code
        } else {
            throw {
                code: 500,
                status: 'SERVER_ERROR',
                message: error.message || 'Internal server error',
            };
        }
    }
};

const addUser = async (nip, password) => {
    if (!nip || !password) {
        throw {
            code: 400,
            status: 'BAD_REQUEST',
            errors: {
                nip: nip ? [] : ['NIP is required'],
                password: password ? [] : ['Password is required'],
            },
        };
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ nip, password: hashedPassword });

        return {
            code: 201,
            status: 'CREATED',
            message: 'User added successfully',
            userId: newUser.id,
        };

    } catch (error) {
        throw {
            code: 500,
            status: 'SERVER_ERROR',
            message: error.message || 'Internal server error',
        };
    }
};

module.exports = {
    login,
    addUser
};
