const Profile = require('../models/Profile');

const getProfileByUserId = (req, res) => {
    const userId = req.params.userId;

    Profile.getProfileByUserId(userId, (error, profile) => {
        if (error) {
            console.error('Error fetching profile:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        if (!profile) {
            console.log('Profile not found for user ID:', userId);
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.status(200).json(profile);
    });
};

module.exports = {
    getProfileByUserId,
};
