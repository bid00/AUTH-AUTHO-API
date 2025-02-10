import express from "express";
import auth from "./routes/authRoutes.js";
import connectDB from "./config/dbconnect.js";
import autho from "./middleware/authoMiddleware.js";
import cors from "./middleware/corsMiddleware.js";
import user from "./routes/userRoutes.js";
import passport from "passport";
import session from "express-session";
import passportSetup from "./config/passport.js";
import corsMiddleware from "./middleware/corsMiddleware.js";
const app = express();
connectDB();


app.use(express.json());

// Sessions
app.use(
    session({
        secret:'key',
        resave:false,
        saveUninitialized:false,
    })
)
// cors middleware
cors(app);

//@desc Initialize passport
app.use(passport.initialize());
app.use(passport.session());
//@desc authantication
app.use('/api/auth',auth);
app.use('/api/user',autho,user);







app.listen(8000,()=>{
    console.log("server is running on port 8000");
});
