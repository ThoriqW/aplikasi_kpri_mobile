const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nip
 *               - password
 *             properties:
 *               nip:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Database error
 */
router.post('/login', UserController.loginUser);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Add user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nip
 *               - password
 *             properties:
 *               nip:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User added successfully
 *       400:
 *         description: NIP and password are required
 *       500:
 *         description: Database error
 */
router.post('/', UserController.addUser);

module.exports = router;
