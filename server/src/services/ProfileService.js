const { Profile, WorkUnit } = require('../models');

const getProfileByUserId = async (userId) => {
  try {
    const profile = await Profile.findOne({
      where: { user_id: userId },
      include: [
        {
          model: WorkUnit,
          as: 'workUnit',
          attributes: ['name']
        }
      ]
    });

    if (!profile) {
      throw {
        code: 404,
        status: 'NOT_FOUND',
        message: 'Profile not found'
      };
    }

    const profileData = profile.toJSON();
    const workUnitName = profileData.workUnit ? profileData.workUnit.name : null;

    const responseProfile = {
      id: profileData.id,
      user_id: profileData.user_id,
      full_name: profileData.full_name,
      work_unit_name: workUnitName,
      position: profileData.position,
      address: profileData.address,
      photo_url: profileData.photo_url,
      join_date: profileData.join_date,
      status: profileData.status,
      gender: profileData.gender,
      birth_date: profileData.birth_date,
      phone_number: profileData.phone_number,
      email: profileData.email
    };

    return {
      code: 200,
      status: 'SUCCESS',
      message: 'Profile retrieved successfully',
      profile: responseProfile
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
