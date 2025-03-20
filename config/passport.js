import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import dotenv  from "dotenv";
dotenv.config();
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        
            try {
                let user = await User.findOne({ googleId: profile.id });
                    if (!user) {
                        user = await User.create({
                            googleId: profile.id,
                            fullName: profile.displayName,
                            email: profile.emails[0].value,
                  });
                 }
                 const token = jwt.sign({userId:user._id.toString()},process.env.accessTokenSecret)
                 return done(null, {user,token});
                 } catch (error) {
                 return done(error, null);
                 }
      }
    )
  );

export default passport;

