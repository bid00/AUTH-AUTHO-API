import { serve, setup } from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import express from "express";

const app = express();

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

// Create an API handler for Swagger UI
export default function handler(req, res) {
    if (req.method === "GET") {
        return setup(swaggerDocs)(req, res);
    } else {
        res.status(405).send("Method Not Allowed");
    }
}
