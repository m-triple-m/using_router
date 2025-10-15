// server.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB connected");
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error("❌ DB Connection Failed:", err.message);
        process.exit(1);
    });

// Optional: handle unhandled rejections
process.on("unhandledRejection", err => {
    console.error("Unhandled Rejection:", err);
    process.exit(1);
});
