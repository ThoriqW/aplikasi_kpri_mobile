const { ValidationError } = require('sequelize');

const errorHandler = (err, req, res, next) => {
    // Check for Sequelize validation errors
    if (err instanceof ValidationError) {
        const validationErrors = err.errors.reduce((acc, curr) => {
            acc[curr.path] = curr.message;
            return acc;
        }, {});
        return res.status(400).json({
            code: 400,
            status: 'VALIDATION_ERROR',
            message: 'Validation error',
            errors: validationErrors,
        });
    }

    // Check for custom errors from services
    if (err.code && err.status) {
        return res.status(err.code).json({
            code: err.code,
            status: err.status,
            message: err.message,
            ...(err.errors && { errors: err.errors }),
        });
    }

    // Default to internal server error
    return res.status(500).json({
        code: 500,
        status: 'SERVER_ERROR',
        message: 'Internal server error',
    });
};

module.exports = errorHandler;
