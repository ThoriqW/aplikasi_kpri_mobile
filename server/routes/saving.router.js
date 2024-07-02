const express = require('express');
const router = express.Router();
const SavingController = require('../controllers/SavingController');
const { authorizeUserId } = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/v1/savings/{userId}:
 *   get:
 *     summary: Get saving by user ID
 *     tags: [Savings]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get the saving for
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Saving retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 saving:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     user_id:
 *                       type: integer
 *                       example: 1
 *                     principal:
 *                       type: number
 *                       example: 1000.00
 *                     mandatory:
 *                       type: number
 *                       example: 500.00
 *                     voluntary:
 *                       type: number
 *                       example: 500.00
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
 *         description: Saving not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Saving not found
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
router.get('/:userId', authorizeUserId, SavingController.getSavingByUserId);

module.exports = router;
