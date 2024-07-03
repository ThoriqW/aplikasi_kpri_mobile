const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');
const { authenticateToken,authorizeUserId } = require('../middleware/authMiddleware');
const multer = require('multer');

// Konfigurasi multer untuk mengunggah foto profil
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/profiles'); // Folder tempat menyimpan foto
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const extension = file.originalname.split('.').pop();
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);
    }
  });
  
  const upload = multer({ storage: storage });
  
  /**
   * @swagger
   * /api/v1/profiles:
   *   post:
   *     summary: Create a new profile
   *     tags: [Profiles]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         multipart/form-data:
   *           schema:
   *             type: object
   *             properties:
   *               user_id:
   *                 type: integer
   *                 description: ID of the user associated with the profile
   *               full_name:
   *                 type: string
   *                 description: Full name of the user
   *               position:
   *                 type: string
   *                 description: Position of the user
   *               work_unit_id:
   *                 type: integer
   *                 description: ID of the work unit associated with the profile
   *               address:
   *                 type: string
   *                 description: Address of the user
   *               photo:
   *                 type: string
   *                 format: binary
   *                 description: Photo file for profile picture
   *               join_date:
   *                 type: string
   *                 format: date
   *                 description: Join date of the user (YYYY-MM-DD)
   *               status:
   *                 type: string
   *                 description: Status of the user (Active, Inactive, etc.)
   *               gender:
   *                 type: string
   *                 description: Gender of the user (Male, Female, etc.)
   *               birth_date:
   *                 type: string
   *                 format: date
   *                 description: Birth date of the user (YYYY-MM-DD)
   *               phone_number:
   *                 type: string
   *                 description: Phone number of the user
   *               email:
   *                 type: string
   *                 description: Email address of the user
   *             required:
   *               - user_id
   *               - full_name
   *               - join_date
   *               - status
   *               - gender
   *     responses:
   *       201:
   *         description: Profile created successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 profile:
   *                   type: object
   *                   properties:
   *                     id:
   *                       type: integer
   *                       example: 1
   *                     user_id:
   *                       type: integer
   *                       example: 1
   *                     full_name:
   *                       type: string
   *                       example: John Doe
   *                     position:
   *                       type: string
   *                       example: Software Engineer
   *                     work_unit_id:
   *                       type: integer
   *                       example: 1
   *                     address:
   *                       type: string
   *                       example: 123 Main St, City
   *                     photo_url:
   *                       type: string
   *                       example: http://example.com/profile.jpg
   *                     join_date:
   *                       type: string
   *                       format: date
   *                       example: 2024-06-30
   *                     status:
   *                       type: string
   *                       example: Active
   *                     gender:
   *                       type: string
   *                       example: Male
   *                     birth_date:
   *                       type: string
   *                       format: date
   *                       example: 1990-01-01
   *                     phone_number:
   *                       type: string
   *                       example: "+1234567890"
   *                     email:
   *                       type: string
   *                       example: "john.doe@example.com"
   *                     created_at:
   *                       type: string
   *                       format: date-time
   *                       example: 2024-06-30T12:00:00Z
   *                     updated_at:
   *                       type: string
   *                       format: date-time
   *                       example: 2024-06-30T12:00:00Z
   *       400:
   *         description: Validation error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   example: Validation error
   *       401:
   *         description: Unauthorized, token is missing or invalid
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   example: Unauthorized
   *       500:
   *         description: Database error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   example: Database error
   */
  router.post('/', authenticateToken, upload.single('photo'), ProfileController.addProfile);

/**
 * @swagger
 * /api/v1/profiles/{userId}:
 *   get:
 *     summary: Get profile by user ID
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get the profile for
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profile:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     user_id:
 *                       type: integer
 *                       example: 1
 *                     full_name:
 *                       type: string
 *                       example: John Doe
 *                     position:
 *                       type: string
 *                       example: Software Engineer
 *                     work_unit_id:
 *                       type: integer
 *                       example: 1
 *                     address:
 *                       type: string
 *                       example: 123 Main St, City
 *                     photo_url:
 *                       type: string
 *                       example: http://example.com/profile.jpg
 *                     join_date:
 *                       type: string
 *                       format: date
 *                       example: 2024-06-30
 *                     status:
 *                       type: string
 *                       example: Active
 *                     gender:
 *                       type: string
 *                       example: Male
 *                     birth_date:
 *                       type: string
 *                       format: date
 *                       example: 1990-01-01
 *                     phone_number:
 *                       type: string
 *                       example: "+1234567890"
 *                     email:
 *                       type: string
 *                       example: "john.doe@example.com"
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-06-30T12:00:00Z
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-06-30T12:00:00Z
 *       401:
 *         description: Unauthorized, token is missing or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Unauthorized
 *       403:
 *         description: Forbidden, access denied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Forbidden
 *       404:
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Profile not found
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Database error
 */
router.get('/:userId', authorizeUserId, ProfileController.getProfileByUserId);

module.exports = router;
