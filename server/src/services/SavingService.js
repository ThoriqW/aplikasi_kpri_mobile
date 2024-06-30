const { Saving } = require('../models');

const getSavingByUserId = async (userId) => {
  try {
    const saving = await Saving.findOne({
      where: { user_id: userId },
    });

    if (!saving) {
      throw {
        code: 404,
        status: 'NOT_FOUND',
        message: 'Saving not found'
      };
    }

    const savingData = saving.toJSON();

    const responseSaving = {
      id: savingData.id,
      user_id: savingData.user_id,
      principal: savingData.principal,
      mandatory: savingData.mandatory,
      voluntary: savingData.voluntary,
    };

    return {
      code: 200,
      status: 'SUCCESS',
      message: 'Saving retrieved successfully',
      saving: responseSaving
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
  getSavingByUserId,
};
