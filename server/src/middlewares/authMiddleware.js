const jwt = require('jsonwebtoken');
const secretKey = 'secret_key'; // Harus disimpan di environment variable

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            code: 401,
            status: 'UNAUTHORIZED',
            message: 'No token provided'
        });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({
                code: 403,
                status: 'FORBIDDEN',
                message: 'Failed to authenticate token'
            });
        }

        req.user = user; // Simpan informasi pengguna ke dalam request
        next();
    });
};

const authorizeUser = (req, res, next) => {
    const userId = req.params.userId;
    if (parseInt(userId) !== req.user.id) {
        return res.status(403).json({
            code: 403,
            status: 'FORBIDDEN',
            message: 'Access denied'
        });
    }
    next();
};

module.exports = {
    authenticateToken,
    authorizeUser
};
