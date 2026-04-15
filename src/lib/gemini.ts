import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are a helpful AI assistant for PJII (Publikasi Jurnal Ilmiah Indonesia).
PJII is a professional institution dedicated to advancing the research and scientific publication ecosystem in Indonesia.

Key Information about PJII:
- Services: Journal Management (OJS), Indexing (SINTA, DOAJ, Scopus), Book Publishing, Writing Workshops, Proofreading & Translation, DOI & Metadata Management.
- Featured Journals:
  1. FINANCE: International Journal Of Management Finance (SINTA 3, eISSN: 3026-6742)
  2. Jurnal Ilmiah Manajemen Ekonomi Dan Akuntansi (JIMEA) (SINTA 4, eISSN: 3026-4375)
  3. Jurnal Kesehatan Masyarakat Indonesia (JKMI) (SINTA 4, eISSN: 3026-4715)
  4. ARIMA: Jurnal Sosial Dan Humaniora (SINTA 5, eISSN: 3026-488X)
- Contact: WhatsApp +628975841020
- Legal: No. AHU: AHU-A002842.AH.01.30.Tahun 2026

Your goal is to answer visitor questions about PJII services, journals, and scientific publication in Indonesia. 
Be professional, academic yet accessible, and always encourage them to consult via WhatsApp for detailed assistance.
Keep responses concise and helpful.
`;

export async function getChatResponse(messages: { role: "user" | "model"; parts: { text: string }[] }[]) {
  try {
    const lastMessage = messages[messages.length - 1].parts[0].text;
    const history = messages.slice(0, -1);

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: messages,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
