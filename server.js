import express from "express";
import auth from "./routes/authRoutes.js";
import connectDB from "./config/dbconnect.js";
import autho from "./middleware/authoMiddleware.js";
import cors from "./middleware/corsMiddleware.js";
import user from "./routes/userRoutes.js";
import passport from "passport";
import session from "express-session";
import swaggerDocs from "./config/swagger.js";
import dotenv from "dotenv";
import passportSetup from "./config/passport.js";
import corsMiddleware from "./middleware/corsMiddleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";
const app = express();
dotenv.config();
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

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my Auth Autho API");
})

//@desc Load API Docs

// Swagger Configuration
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Auth Autho API",
            version: "1.0.0",
            description: "API documentation for my Express app by Abdelrahman",
        },
        servers: [{ url: "https://auth-autho-api.vercel.app/" }],
    },
    apis: [path.resolve("routes/*.js")], // Absolute path
};

// Generate Swagger Docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(8080||process.env.PORT,()=>{
    console.log("server is running on port 8000");
});
