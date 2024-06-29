const { Profile } = require('../models');

const getProfileByUserId = async (userId) => {
  try {
    const profile = await Profile.findOne({ where: { user_id: userId } });

    if (!profile) {
      return {
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
    return {
      code: 500,
      status: 'DATABASE_ERROR',
      message: 'Database error occurred'
    };
  }
};

module.exports = {
  getProfileByUserId,
};
