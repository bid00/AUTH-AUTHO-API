import express from "express";
import auth from "./routes/authRoutes.js";
import connectDB from "./config/dbconnect.js";
import autho from "./middleware/authoMiddleware.js";
import user from "./routes/userRoutes.js"

const app = express();
connectDB();


app.use(express.json());



//@desc authantication
app.use('/api/auth',auth);
//@autho middleware
app.use(autho);
app.use('/api/user',user);



app.listen(8000,()=>{
    console.log("server is running on port 8000");
});
