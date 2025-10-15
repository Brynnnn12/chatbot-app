import asyncHandler from "express-async-handler";
import { chatWithGroqService } from "../services/groq.service.js";
import {
  checkChatLimit,
  incrementChatCount,
  getClientIP,
} from "../utils/chatLimit.js";
import {
  formatChatSuccess,
  formatError,
  formatLimitExceeded,
} from "../utils/responseUtils.js";

export const chatWithGroq = asyncHandler(async (req, res) => {
  const { message } = req.body;
  const clientIP = getClientIP(req);

  // Validate input
  if (!message?.trim()) {
    return res.status(400).json(formatError("Message is required"));
  }

  // Check chat limit
  const limitCheck = checkChatLimit(clientIP);
  if (!limitCheck.allowed) {
    return res.status(429).json(formatLimitExceeded(limitCheck));
  }

  try {
    // Get AI response
    const result = await chatWithGroqService(message.trim());

    // Increment usage counter
    incrementChatCount(clientIP);

    // Get updated limit info and format response
    const updatedLimit = checkChatLimit(clientIP);
    const response = formatChatSuccess(result, updatedLimit);

    res.json(response);
  } catch (error) {
    console.error("Chat Controller Error:", error.message);
    res
      .status(500)
      .json(formatError("Failed to get response from Groq", error.message));
  }
});
