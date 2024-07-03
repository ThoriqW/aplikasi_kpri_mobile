const express = require('express');
const router = express.Router();
const BannerController = require('../controllers/BannerController');
const { authenticateToken } = require('../middleware/authMiddleware');
const multer = require('multer');

// Konfigurasi multer untuk mengunggah foto banner
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/banners'); // Folder tempat menyimpan foto banner
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = file.originalname.split('.').pop();
    cb(null, 'banner-' + uniqueSuffix + '.' + extension);
  }
});

const upload = multer({ storage: storage });

/**
 * @swagger
 * /api/v1/banners:
 *   post:
 *     summary: Create a new banner
 *     tags: [Banners]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Banner title
 *               photo:
 *                 type: string
 *                 format: binary
 *                 description: Banner image file
 *             required:
 *               - title
 *     responses:
 *       201:
 *         description: Banner created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 201
 *                 status:
 *                   type: string
 *                   example: CREATED
 *                 message:
 *                   type: string
 *                   example: Banner created successfully
 *                 banner:
 *                   $ref: '#/components/schemas/Banner'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 status:
 *                   type: string
 *                   example: SERVER_ERROR
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.post('/', upload.single('photo'), BannerController.addBanner);

/**
 * @swagger
 * /api/v1/banners/active:
 *   get:
 *     summary: Get all active banners
 *     tags: [Banners]
 *     responses:
 *       200:
 *         description: Active banners retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 status:
 *                   type: string
 *                   example: SUCCESS
 *                 message:
 *                   type: string
 *                   example: Active banners retrieved successfully
 *                 banners:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Banner'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 status:
 *                   type: string
 *                   example: SERVER_ERROR
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.get('/active', authenticateToken, BannerController.getActiveBanners);

module.exports = router;
