import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

export const chatWithGroqService = async (message) => {
  try {
    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: message,
    });

    return {
      success: true,
      response: text,
    };
  } catch (error) {
    console.error("Groq API Error:", error);
    throw new Error(`Failed to get response from Groq: ${error.message}`);
  }
};
