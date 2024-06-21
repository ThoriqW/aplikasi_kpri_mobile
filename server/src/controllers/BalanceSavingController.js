const BalanceSaving = require('../models/BalanceSaving');

const getBalanceSavingByUserId = (req, res) => {
    const userId = req.params.userId;

    BalanceSaving.getBalanceSavingByUserId(userId, (error, balanceSaving) => {
        if (error) {
            console.error('Error fetching balance saving:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        if (!balanceSaving) {
            console.log('Balance saving not found for user ID:', userId);
            return res.status(404).json({ error: 'Balance saving not found' });
        }
        res.status(200).json(balanceSaving);
    });
};

module.exports = {
    getBalanceSavingByUserId,
};
