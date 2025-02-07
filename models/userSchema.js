import mongoose, { model } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
    },
    phone: {
        type: String,
        default:"",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    googleId: { type: String }, 
    facebookId: { type: String }
});

const User = mongoose.model('Users',userSchema);

export default User;