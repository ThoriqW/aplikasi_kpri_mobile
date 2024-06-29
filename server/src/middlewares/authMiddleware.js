const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({
            code: 401,
            status: 'UNAUTHORIZED',
            message: 'Access token is missing'
        });
    }

    const token = authHeader.replace('Bearer ', '');

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                code: 401,
                status: 'UNAUTHORIZED',
                message: 'Invalid access token'
            });
        }

        const userId = decoded.id;
        User.getUserById(userId, (error, user) => {
            if (error || !user || user.current_token !== token) {
                return res.status(401).json({
                    code: 401,
                    status: 'UNAUTHORIZED',
                    message: 'Invalid access token'
                });
            }

            const requestedUserId = parseInt(req.params.userId, 10);
            if (user.id !== requestedUserId) {
                return res.status(403).json({
                    code: 403,
                    status: 'FORBIDDEN',
                    message: 'Access denied'
                });
            }

            req.user = user;
            next();
        });
    });
};

module.exports = authenticateToken;
