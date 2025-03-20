import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Auth_autho API",
            version: "1.0.0",
            description: "API documentation for my Express app by Abdelrahman",
        },
        servers: [{ url: "https://auth-autho-api.vercel.app" }],
    },
    apis: ["./routes/*.js"], // Location of route files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
