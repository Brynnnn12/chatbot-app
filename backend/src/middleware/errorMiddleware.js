import { formatError } from "../utils/responseUtils.js";

/**
 * 404 Not Found Middleware
 * Handles requests to non-existent routes
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Global Error Handler Middleware
 * Handles all errors in a centralized way
 */
export const errorHandler = (err, req, res, next) => {
  // Log error for debugging
  console.error("Global Error Handler:", {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    ip: req.ip,
    timestamp: new Date().toISOString(),
  });

  // Determine status code
  let statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  // Handle specific error types
  if (err.name === "ValidationError") {
    statusCode = 400;
  } else if (err.name === "UnauthorizedError") {
    statusCode = 401;
  } else if (err.name === "CastError") {
    statusCode = 400;
  }

  // Set status code
  res.status(statusCode);

  // Send error response
  res.json(
    formatError(
      err.message || "Something went wrong",
      process.env.NODE_ENV === "development" ? err.stack : undefined,
      statusCode
    )
  );
};

/**
 * Async Error Wrapper
 * Wraps async route handlers to catch rejected promises
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
