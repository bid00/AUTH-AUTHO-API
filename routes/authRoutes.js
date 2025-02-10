import express from "express";
import jwt from 'jsonwebtoken';
import { accessTokenSecret } from "../config.js";
import { login, register } from "../controllers/authController.js";
import passport from "passport";

const router = express.Router();

// Login
router.post('/login',login);

// register
router.post('/register',register);

//passport
router.get('/google', passport.authenticate("google", { scope: ["profile", "email"] }))
//@desc google callback
router.get('/google/callback',passport.authenticate("google",{session:false}),(req,res)=>{
    return res.status(200).json({message : "logged successful",token:req.user.token});

});



export default router;