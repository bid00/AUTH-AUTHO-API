import { serve, setup } from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import express from "express";

const app = express();

// Swagger Configuration
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Auth Autho API",
            version: "1.0.0",
            description: "API documentation for my Express app by Abdelrahman",
        },
        servers: [
            { url: "https://auth-autho-api.vercel.app/" }, 
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Expose Swagger UI as an API route
app.use("/api-docs", serve, setup(swaggerDocs));

export default app;
