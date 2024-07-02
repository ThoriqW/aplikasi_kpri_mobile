const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/NotificationController');
const { authorizeUserId } = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/v1/notifications/{userId}:
 *   get:
 *     summary: Get notifications by user ID
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get the notifications for
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Notifications retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 notifications:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       user_id:
 *                         type: integer
 *                         example: 1
 *                       type:
 *                         type: string
 *                         example: "success"
 *                       title:
 *                         type: string
 *                         example: "Welcome"
 *                       body:
 *                         type: string
 *                         example: "Your account has been created successfully."
 *                       status:
 *                         type: string
 *                         example: "unread"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-07-01T12:00:00Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-07-01T12:00:00Z"
 *       401:
 *         description: Unauthorized, token is missing or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *       403:
 *         description: Forbidden, access denied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Forbidden"
 *       404:
 *         description: Notifications not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Notifications not found"
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Database error"
 */
router.get('/:userId', authorizeUserId, NotificationController.getNotificationsByUserId);

module.exports = router;
