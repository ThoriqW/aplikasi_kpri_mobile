const express = require('express');
const router = express.Router();
const BillController = require('../controllers/BillController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/v1/bills/{userId}:
 *   get:
 *     summary: Get bills by user ID
 *     tags: [Bills]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get the bills for
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Bills retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bills:
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
 *                       month:
 *                         type: string
 *                         example: "June"
 *                       year:
 *                         type: integer
 *                         example: 2024
 *                       time_period:
 *                         type: integer
 *                         example: 12
 *                       installment_number:
 *                         type: integer
 *                         example: 5
 *                       arrears:
 *                         type: number
 *                         example: 1500.00
 *                       principal:
 *                         type: number
 *                         example: 1000.00
 *                       interest:
 *                         type: number
 *                         example: 50.00
 *                       mandatory:
 *                         type: number
 *                         example: 500.00
 *                       total_bill:
 *                         type: number
 *                         example: 1550.00
 *                       payment_amount:
 *                         type: number
 *                         example: 1000.00
 *                       remaining_arrears:
 *                         type: number
 *                         example: 550.00
 *                       status:
 *                         type: string
 *                         example: "Paid"
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
 *         description: Bills not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Bills not found
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
router.get('/:userId', authMiddleware, BillController.getBillsByUserId);

module.exports = router;
