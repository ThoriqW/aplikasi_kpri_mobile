const { Profile } = require('../models');

const getProfileByUserId = async (userId) => {
  try {
    const profile = await Profile.findOne({ where: { user_id: userId } });

    if (!profile) {
      throw {
        code: 404,
        status: 'NOT_FOUND',
        message: 'Profile not found'
      };
    }

    return {
      code: 200,
      status: 'SUCCESS',
      message: 'Profile retrieved successfully',
      profile
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
  getProfileByUserId,
};
