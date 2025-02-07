import express from "express";
import { login, register } from "../controllers/authController.js";
const router = express.Router();

// Login
router.post('/login',login);

// register
router.post('/register',register);

export default router;