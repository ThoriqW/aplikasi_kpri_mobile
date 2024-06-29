const ProfileService = require('../services/ProfileService');

/**
 * Get profile by user ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getProfileByUserId = async (req, res) => {
    const userId = req.params.userId;

    try {
        const result = await ProfileService.getProfileByUserId(userId);
        res.status(result.code).json(result);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

module.exports = {
    getProfileByUserId,
};
