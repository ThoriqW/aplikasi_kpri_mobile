const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/NotificationController');

/**
 * @swagger
 * /notifications/{userMemberId}:
 *   get:
 *     summary: Get notifications by user member ID and type
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: userMemberId
 *         required: true
 *         description: ID of the user member to get notifications for
 *         schema:
 *           type: integer
 *       - in: query
 *         name: type
 *         required: false
 *         description: Type of notifications to get (koperasi or anggota)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   user_member_id:
 *                     type: integer
 *                   type:
 *                     type: string
 *                   notification_type:
 *                     type: string
 *                   title:
 *                     type: string
 *                   message:
 *                     type: string
 *                   status:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *       404:
 *         description: No notifications found
 *       500:
 *         description: Database error
 */
router.get('/:userMemberId', NotificationController.getNotificationsByUserIdAndType);

/**
 * @swagger
 * /notifications/{notificationId}/read:
 *   patch:
 *     summary: Mark notification as read
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: notificationId
 *         required: true
 *         description: ID of the notification to mark as read
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Notification marked as read
 *       404:
 *         description: Notification not found
 *       500:
 *         description: Database error
 */
router.patch('/:notificationId/read', NotificationController.markNotificationAsRead);

module.exports = router;
