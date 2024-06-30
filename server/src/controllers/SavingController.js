const SavingService = require('../services/SavingService');

const getSavingByUserId = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const result = await SavingService.getSavingByUserId(userId);
        res.status(result.code).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getSavingByUserId,
};
