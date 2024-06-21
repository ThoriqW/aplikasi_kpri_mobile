const express = require('express');
const router = express.Router();
const BalanceSavingController = require('../controllers/BalanceSavingController');

/**
 * @swagger
 * /balance_savings/{userId}:
 *   get:
 *     summary: Get balance saving by user ID
 *     tags: [Balance Saving]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get balance saving for
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Balance saving retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 user_member_id:
 *                   type: integer
 *                 principal_saving:
 *                   type: number
 *                   format: decimal
 *                 mandatory_saving:
 *                   type: number
 *                   format: decimal
 *                 voluntary_saving:
 *                   type: number
 *                   format: decimal
 *       404:
 *         description: Balance saving not found
 *       500:
 *         description: Database error
 */
router.get('/:userId', BalanceSavingController.getBalanceSavingByUserId);

module.exports = router;
