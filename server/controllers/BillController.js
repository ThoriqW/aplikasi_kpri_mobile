const BillService = require('../services/BillService');

const getBillByUserId = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const result = await BillService.getBillByUserId(userId);
        res.status(result.code).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getBillByUserId,
};
