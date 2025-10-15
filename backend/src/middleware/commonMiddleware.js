/**
 * Request Logging Middleware
 * Logs all incoming requests with details
 */
export const requestLogger = (req, res, next) => {
  const start = Date.now();
  const timestamp = new Date().toISOString();

  // Log request
  console.log(
    `[${timestamp}] ${req.method} ${req.originalUrl} - IP: ${req.ip}`
  );

  // Log response when finished
  res.on("finish", () => {
    const duration = Date.now() - start;
    const statusCode = res.statusCode;
    const statusColor =
      statusCode >= 400 ? "🔴" : statusCode >= 300 ? "🟡" : "🟢";

    console.log(
      `${statusColor} [${timestamp}] ${req.method} ${req.originalUrl} ${statusCode} - ${duration}ms`
    );
  });

  next();
};

/**
 * Security Headers Middleware
 * Adds basic security headers
 */
export const securityHeaders = (req, res, next) => {
  // Prevent clickjacking
  res.setHeader("X-Frame-Options", "DENY");

  // Prevent MIME type sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Enable XSS protection
  res.setHeader("X-XSS-Protection", "1; mode=block");

  // Referrer policy
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  next();
};

/**
 * CORS Options Handler
 * Handles preflight requests
 */
export const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};
