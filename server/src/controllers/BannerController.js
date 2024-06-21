const Banner = require('../models/Banner');

const getActiveBanners = (req, res) => {
    Banner.getActiveBanners((error, banners) => {
        if (error) {
            console.error('Error fetching banners:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        if (banners.length === 0) {
            console.log('No active banners found');
            return res.status(404).json({ error: 'No active banners found' });
        }
        res.status(200).json(banners);
    });
};

module.exports = {
    getActiveBanners,
};
