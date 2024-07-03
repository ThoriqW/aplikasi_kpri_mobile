const { Profile, WorkUnit, User } = require('../models');

const getProfileByUserId = async (userId) => {
  try {
    const profile = await Profile.findOne({
      where: { user_id: userId },
      include: [
        {
          model: WorkUnit,
          as: 'workUnit',
          attributes: ['name']
        },
        {
          model: User,
          as: 'user',
          attributes: ['nip']
        }
      ]
    });

    if (!profile) {
      const error = new Error('Profile not found');
      error.code = 404;
      error.status = 'NOT_FOUND';
      throw error;
    }

    const profileData = profile.toJSON();
    const workUnitName = profileData.workUnit ? profileData.workUnit.name : null;
    const nip = profileData.user.nip;

    const responseProfile = {
      id: profileData.id,
      user_id: profileData.user_id,
      full_name: profileData.full_name,
      nip: nip,
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
      code: error.code || 500,
      status: error.status || 'SERVER_ERROR',
      message: error.message || 'Internal server error'
    };
  }
};

const addProfile = async (profileData, file) => {
  try {
    if (file) {
      profileData.photo_url = `/profiles/${file.filename}`;
    }

    const newProfile = await Profile.create(profileData);

    return {
      code: 201,
      status: 'CREATED',
      message: 'Profile created successfully',
      profile: newProfile
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
  addProfile
};
