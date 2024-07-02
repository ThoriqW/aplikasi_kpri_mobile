const jwt = require('jsonwebtoken');

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
        req.user = { id: userId };

        next();
    });
};

// Middleware untuk otorisasi berdasarkan userId
const authorizeUserId = (req, res, next) => {
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

        if (userId !== parseInt(req.params.userId, 10)) {
            return res.status(403).json({
                code: 403,
                status: 'FORBIDDEN',
                message: 'Access denied'
            });
        }

        req.user = { id: userId };

        next();
    });
};

module.exports = {
    authenticateToken,
    authorizeUserId
};
