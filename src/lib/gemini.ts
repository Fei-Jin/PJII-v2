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
      throw new Error(errorData.error || "Gagal menghubungi server AI");
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Chat API Error:", error);
    throw error;
  }
}
