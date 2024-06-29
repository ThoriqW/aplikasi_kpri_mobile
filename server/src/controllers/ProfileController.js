const ProfileService = require('../services/ProfileService');

const getProfileByUserId = (req, res) => {
    const userId = req.params.userId;

    ProfileService.getProfileByUserId(userId)
        .then(profile => res.status(200).json(profile))
        .catch(error => {
            console.error('Error fetching profile:', error);
            res.status(error.code || 500).json({ error: error.message || 'Database error' });
        });
};

module.exports = {
    getProfileByUserId,
};
