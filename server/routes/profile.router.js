const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');
const authMiddleware = require('../middleware/authMiddleware');

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
router.get('/:userId', authMiddleware, ProfileController.getProfileByUserId);

module.exports = router;
