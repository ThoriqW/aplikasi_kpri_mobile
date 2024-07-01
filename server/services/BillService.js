const { Bill } = require('../models');

const getBillByUserId = async (userId) => {
  try {
    const bills = await Bill.findAll({
      where: { user_id: userId },
    });

    if (bills.length === 0) {
      throw {
        code: 404,
        status: 'NOT_FOUND',
        message: 'Bills not found'
      };
    }

    const responseBills = bills.map(bill => {
      const billData = bill.toJSON();
      return {
        id: billData.id,
        user_id: billData.user_id,
        month: billData.month,
        year: billData.year,
        time_period: billData.time_period,
        installment_number: billData.installment_number,
        arrears: billData.arrears,
        principal: billData.principal,
        interest: billData.interest,
        mandatory: billData.mandatory,
        total_bill: billData.total_bill,
        payment_amount: billData.payment_amount,
        remaining_arrears: billData.remaining_arrears,
        status: billData.status
      };
    });

    return {
      code: 200,
      status: 'SUCCESS',
      message: 'Bills retrieved successfully',
      bills: responseBills
    };
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      throw {
        code: 400,
        status: 'VALIDATION_ERROR',
        message: 'Validation error',
        errors: error.errors.map(err => ({
          field: err.path,
          message: err.message
        }))
      };
    }
    throw {
      code: 500,
        status: 'SERVER_ERROR',
        message: error.message || 'Internal server error'
    };
  }
};

module.exports = {
  getBillByUserId,
};
