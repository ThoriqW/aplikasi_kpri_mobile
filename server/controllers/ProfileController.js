const ProfileService = require('../services/ProfileService');

const getProfileByUserId = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const result = await ProfileService.getProfileByUserId(userId);
        res.status(result.code).json(result);
    } catch (err) {
        next(err);
    }
};

const addProfile = async (req, res, next) => {
  const profileData = req.body;
  const file = req.file;

  try {

    const result = await ProfileService.addProfile(profileData, file);
    res.status(result.code).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    getProfileByUserId,
    addProfile
};
