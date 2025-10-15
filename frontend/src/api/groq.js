const API_BASE_URL = "http://localhost:3000/api";

export const chatWithGroq = async (message) => {
  try {
    const response = await fetch(`${API_BASE_URL}/groq/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to get response from server");
    }

    return {
      success: true,
      response: data.response,
      remaining: data.remaining,
      limitMessage: data.limitMessage,
      usage: data.usage,
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};
