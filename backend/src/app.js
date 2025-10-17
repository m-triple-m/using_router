// app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
// import errorHandler from "./middleware/error.middleware.js";
import http from 'http';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("🟢 User connected:", socket.id);

    socket.on("offer", (data) => {
        socket.to(data.to).emit("offer", { sdp: data.sdp, from: socket.id });
    });

    socket.on("answer", (data) => {
        socket.to(data.to).emit("answer", { sdp: data.sdp, from: socket.id });
    });

    socket.on("ice-candidate", (data) => {
        socket.to(data.to).emit("ice-candidate", { candidate: data.candidate, from: socket.id });
    });

    socket.on("join-room", (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit("user-joined", socket.id);
    });

    socket.on("disconnect", () => {
        console.log("🔴 User disconnected:", socket.id);
    });
});

// Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/v1/users", userRoutes);

// Global Error Handler
// app.use(errorHandler);

export default app;  // 👈 export the configured app
