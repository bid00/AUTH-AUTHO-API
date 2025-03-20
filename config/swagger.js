const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const express = require("express");

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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
