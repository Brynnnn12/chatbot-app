/**
 * Response formatting utilities for consistent API responses
 */

/**
 * Format successful chat response
 * @param {Object} result - Service result
 * @param {Object} limitInfo - Limit information
 * @returns {Object} - Formatted response
 */
export const formatChatSuccess = (result, limitInfo) => ({
  success: true,
  response: result.response,
  remaining: limitInfo.remaining,
  limitMessage: limitInfo.message,
  usage: {
    current: limitInfo.currentCount + 1, // +1 because this is after increment
    max: limitInfo.maxLimit,
  },
});

/**
 * Format error response
 * @param {string} message - Error message
 * @param {string} details - Error details
 * @param {number} statusCode - HTTP status code
 * @returns {Object} - Formatted error response
 */
export const formatError = (message, details = null, statusCode = 500) => ({
  success: false,
  error: message,
  ...(details && { details }),
  timestamp: new Date().toISOString(),
});

/**
 * Format limit exceeded response
 * @param {Object} limitInfo - Limit information
 * @returns {Object} - Formatted limit exceeded response
 */
export const formatLimitExceeded = (limitInfo) => ({
  success: false,
  error: "Chat limit exceeded",
  message: limitInfo.message,
  remaining: limitInfo.remaining,
  limit: {
    current: limitInfo.currentCount,
    max: limitInfo.maxLimit,
  },
  timestamp: new Date().toISOString(),
});
