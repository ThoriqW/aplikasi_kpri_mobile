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
        title: bannerData.title,
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

const addBanner = async (bannerData, file) => {
  try {
    const newBanner = await Banner.create({
      title: bannerData.title,
      url_photo: file ? `/banners/${file.filename}` : null,
      is_active: true // Set is_active to true by default
    });

    return {
      code: 201,
      status: 'CREATED',
      message: 'Banner created successfully',
      banner: newBanner
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
  getActiveBanners,
  addBanner
};
