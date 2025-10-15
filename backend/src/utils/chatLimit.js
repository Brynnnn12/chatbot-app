// In-memory storage for IP-based chat limits
const chatLimits = new Map();
const MAX_CHATS_PER_IP = 5;
const CLEANUP_INTERVAL = 60 * 60 * 1000; // 1 hour

// Auto cleanup counters
setInterval(() => {
  chatLimits.clear();
}, CLEANUP_INTERVAL);

/**
 * Get client IP address from request object
 * @param {Object} req - Express request object
 * @returns {string} - Client IP address
 */
export const getClientIP = (req) => {
  return (
    req.ip ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.headers?.["x-forwarded-for"]?.split(",")[0]?.trim() ||
    "unknown"
  );
};

/**
 * Check if IP has exceeded chat limit
 * @param {string} ip - Client IP address
 * @returns {Object} - Limit check result
 */
export const checkChatLimit = (ip) => {
  const currentCount = chatLimits.get(ip) || 0;
  const remaining = Math.max(0, MAX_CHATS_PER_IP - currentCount);

  return {
    allowed: currentCount < MAX_CHATS_PER_IP,
    remaining,
    currentCount,
    maxLimit: MAX_CHATS_PER_IP,
    message:
      currentCount >= MAX_CHATS_PER_IP
        ? `Chat limit reached. Maximum ${MAX_CHATS_PER_IP} messages per session.`
        : `Chat allowed. ${remaining} messages remaining.`,
  };
};

/**
 * Increment chat count for IP address
 * @param {string} ip - Client IP address
 * @returns {number} - New count
 */
export const incrementChatCount = (ip) => {
  const currentCount = chatLimits.get(ip) || 0;
  const newCount = currentCount + 1;
  chatLimits.set(ip, newCount);
  return newCount;
};

/**
 * Get current chat count for IP
 * @param {string} ip - Client IP address
 * @returns {number} - Current count
 */
export const getChatCount = (ip) => {
  return chatLimits.get(ip) || 0;
};

/**
 * Reset chat count for IP (useful for testing)
 * @param {string} ip - Client IP address
 */
export const resetChatCount = (ip) => {
  chatLimits.delete(ip);
};
