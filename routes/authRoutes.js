import express from "express";
import { login, register } from "../controllers/authController.js";
import passport from "passport";

const router = express.Router();

// Login
router.post('/login',login);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User Login
 *     description: Authenticates a user and returns a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: "your-jwt-token"
 *       422:
 *         description: Missing email or password
 *       401:
 *         description: Unauthorized - Invalid credentials
 */

// register
router.post('/register',register);
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: User register
 *     description: Creates a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "userFullName"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               phone:
 *                 type: number
 *                 example: "+0011223344"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Successful register
 *       422:
 *         description: Missing filed
 *       400:
 *         description: account with this email is exists
 */

//passport
router.get('/google', passport.authenticate("google", { scope: ["profile", "email"] }))
/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     summary: Login with google
 *     description: google login.
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: "your-jwt-token"
 */

//@desc google callback
router.get('/google/callback',passport.authenticate("google",{session:false}),(req,res)=>{
    return res.status(200).json({message : "logged successful",token:req.user.token});

});



export default router;