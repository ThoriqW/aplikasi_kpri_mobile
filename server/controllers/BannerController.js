const BannerService = require('../services/BannerService');

const getActiveBanners = async (req, res, next) => {
  try {
    const result = await BannerService.getActiveBanners();
    res.status(result.code).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getActiveBanners,
};
