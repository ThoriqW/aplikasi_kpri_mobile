const Profile = require('../models/Profile');

const getProfileByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        Profile.getProfileByUserId(userId, (error, profile) => {
            if (error) {
                return reject({
                    code: 500,
                    status: 'DATABASE_ERROR',
                    message: 'Database error occurred'
                });
            }
            if (!profile) {
                return reject({
                    code: 404,
                    status: 'NOT_FOUND',
                    message: 'Profile not found'
                });
            }
            resolve({
                code: 200,
                status: 'SUCCESS',
                message: 'Profile retrieved successfully',
                profile
            });
        });
    });
};

module.exports = {
    getProfileByUserId,
};
