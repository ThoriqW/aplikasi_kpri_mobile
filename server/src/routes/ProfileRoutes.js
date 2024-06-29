const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');

/**
 * @swagger
 * /profiles/{userId}:
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
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 profile:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     user_member_id:
 *                       type: integer
 *                     full_name:
 *                       type: string
 *                     position:
 *                       type: string
 *                     work_unit_id:
 *                       type: integer
 *                     address:
 *                       type: string
 *                     photo_url:
 *                       type: string
 *                     join_date:
 *                       type: string
 *                       format: date
 *                     status:
 *                       type: string
 *                     gender:
 *                       type: string
 *                     birth_date:
 *                       type: string
 *                       format: date
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *       404:
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */
router.get('/:userId', ProfileController.getProfileByUserId);

module.exports = router;
