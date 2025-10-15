import express from "express";
import cors from "cors";
import groqRoutes from "../routes/groq.route.js";
import {
  requestLogger,
  securityHeaders,
} from "../middleware/commonMiddleware.js";
import { notFound, errorHandler } from "../middleware/errorMiddleware.js";

const app = express();

// Security middleware (harus paling atas)
app.use(securityHeaders);

// Request logging
app.use(requestLogger);

// CORS configuration
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "http://localhost:5173",
      "http://localhost:3000", // fallback for other clients
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// API routes
app.use("/api/groq", groqRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// 404 handler (harus sebelum error handler)
app.use(notFound);

// Global error handler (harus paling bawah)
app.use(errorHandler);

export default app;
