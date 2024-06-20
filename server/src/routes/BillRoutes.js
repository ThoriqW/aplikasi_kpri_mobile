const express = require('express');
const router = express.Router();
const BillController = require('../controllers/BillController');

/**
 * @swagger
 * /bills/{userId}:
 *   get:
 *     summary: Get bills by user ID
 *     tags: [Bills]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get bills for
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bills retrieved successfully
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
 *                   month:
 *                     type: string
 *                   year:
 *                     type: integer
 *                   time_period:
 *                     type: integer
 *                   installment_number:
 *                     type: integer
 *                   arrears:
 *                     type: number
 *                     format: float
 *                   principal:
 *                     type: number
 *                     format: float
 *                   interest:
 *                     type: number
 *                     format: float
 *                   mandatory_saving:
 *                     type: number
 *                     format: float
 *                   total_bill:
 *                     type: number
 *                     format: float
 *                   payment_amount:
 *                     type: number
 *                     format: float
 *                   remaining_arrears:
 *                     type: number
 *                     format: float
 *                   status:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *       404:
 *         description: No bills found
 *       500:
 *         description: Database error
 */
router.get('/:userId', BillController.getBillsByUserId);

module.exports = router;
