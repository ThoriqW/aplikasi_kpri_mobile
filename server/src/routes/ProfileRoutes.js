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
 *         description: ID of the user profile to get
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 user_member_id:
 *                   type: integer
 *                 full_name:
 *                   type: string
 *                 position:
 *                   type: string
 *                 work_unit_id:
 *                   type: integer
 *                 address:
 *                   type: string
 *                 phone_number:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Database error
 */
router.get('/:userId', ProfileController.getProfileByUserId);

module.exports = router;
