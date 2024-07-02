const { Banner } = require('../models');

const getActiveBanners = async () => {
  try {
    const banners = await Banner.findAll({
      where: {
        is_active: true
      }
    });

    const responseBanners = banners.map(banner => {
      const bannerData = banner.toJSON();
      return {
        id: bannerData.id,
        url_photo: bannerData.url_photo,
        is_active: bannerData.is_active
      };
    });

    return {
      code: 200,
      status: 'SUCCESS',
      message: 'Active banners retrieved successfully',
      banners: responseBanners
    };
  } catch (error) {
    throw {
      code: 500,
      status: 'SERVER_ERROR',
      message: error.message || 'Internal server error'
    };
  }
};

module.exports = {
  getActiveBanners
};
