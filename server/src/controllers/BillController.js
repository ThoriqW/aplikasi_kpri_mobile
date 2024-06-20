const Bill = require('../models/Bill');

const getBillsByUserId = (req, res) => {
    const userId = req.params.userId;

    Bill.getBillsByUserId(userId, (error, bills) => {
        if (error) {
            console.error('Error fetching bills:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        if (bills.length === 0) {
            console.log('No bills found for user ID:', userId);
            return res.status(404).json({ error: 'No bills found' });
        }
        res.status(200).json(bills);
    });
};

module.exports = {
    getBillsByUserId,
};
