export async function getChatResponse(messages: { role: "user" | "model"; parts: { text: string }[] }[]) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to get AI response");
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Chat API Error:", error);
    throw error;
  }
}
