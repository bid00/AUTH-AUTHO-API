import cors from 'cors';

const corsMiddleware = (app) => {
  // Add CORS to the express app
  app.use(
    cors({
      origin: "http://localhost", 
      methods: ["GET", "POST","PATCH"],
    })
  );
};

export default corsMiddleware;