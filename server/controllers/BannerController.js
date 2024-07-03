const BannerService = require('../services/BannerService');

const getActiveBanners = async (req, res, next) => {
  try {
    const result = await BannerService.getActiveBanners();
    res.status(result.code).json(result);
  } catch (err) {
    next(err);
  }
};

const addBanner = async (req, res, next) => {
  try {
    const { title } = req.body;

    const result = await BannerService.addBanner({ title }, req.file);

    res.status(result.code).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getActiveBanners,
  addBanner
};
