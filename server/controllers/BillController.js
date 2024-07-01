const BillService = require('../services/BillService');

const getBillsByUserId = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const result = await BillService.getBillsByUserId(userId);
        res.status(result.code).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getBillsByUserId,
};
