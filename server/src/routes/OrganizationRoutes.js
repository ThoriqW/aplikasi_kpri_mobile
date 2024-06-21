const express = require('express');
const router = express.Router();
const OrganizationController = require('../controllers/OrganizationController');

/**
 * @swagger
 * /organizations:
 *   get:
 *     summary: Get organization by role
 *     tags: [Organization]
 *     parameters:
 *       - in: query
 *         name: role
 *         required: false
 *         description: Role of the organization to get (pengawas, pengurus, staff)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of organization
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   role:
 *                     type: string
 *                   position:
 *                     type: string
 *                   full_name:
 *                     type: string
 *                   photo_url:
 *                     type: string
 *                   description:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *       404:
 *         description: No organization found
 *       500:
 *         description: Database error
 */
router.get('/', OrganizationController.getOrganizationByRole);

module.exports = router;
