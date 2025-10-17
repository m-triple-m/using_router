// app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
// import errorHandler from "./middleware/error.middleware.js";

const app = express();

// Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/v1/users", userRoutes);

// Global Error Handler
// app.use(errorHandler);

export default app;  // 👈 export the configured app
