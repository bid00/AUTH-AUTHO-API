import express from "express";
import { changePassword, getProfile, updateProfile } from "../controllers/profileController.js";
const router = express.Router();

// Get Profile
router.get('/getprofile',getProfile);
/**
 * @swagger
 * /api/user/getprofile:
 *   get:
 *     summary: User profile
 *     description: return user profile data.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: "your-access-token-here"
 *         description: Attach your access token as the Authorization header.
 *     responses:
 *       200:
 *         description: profile data succeefuly fetched
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fullName:
 *                   type: string
 *                   example: "full name"
 *                 email:
 *                   type: string
 *                   example: "user@example.com"
 *                 phone:
 *                   type: string
 *                   example: "+0012345678"
 *       401:
 *         description: User UnAuthorized
 */

// Update Profile
router.patch('/updateprofile',updateProfile);
/**
 * @swagger
 * /api/user/profile:
 *   put:
 *     summary: Update user profile
 *     description: Allows a logged-in user to update their profile details (full name, email, phone).
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: "your-access-token-here"
 *         description: Attach your access token as the Authorization header.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Profile updated successfully"
 *       400:
 *         description: Email already in use
 *       401:
 *         description: Unauthorized - No token provided
 *       500:
 *         description: Internal Server Error
 */


// change Password
router.patch('/changepassword',changePassword);
/**
 * @swagger
 * /api/user/changepassword:
 *   patch:
 *     summary: Change user password
 *     description: Allows a logged-in user to change their password by providing the old and new passwords.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: "your-access-token-here"
 *         description: Attach your access token as the Authorization header.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 example: "oldpassword123"
 *               newPassword:
 *                 type: string
 *                 example: "newpassword456"
 *               cNewPassword:
 *                 type: string
 *                 example: "newpassword456"
 *     responses:
 *       200:
 *         description: Password updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Password updated successfully"
 *       401:
 *         description: Unauthorized - No token provided
 *       422:
 *         description: Validation error (e.g., incorrect old password, missing fields)
 *       500:
 *         description: Internal Server Error
 */


export default router;