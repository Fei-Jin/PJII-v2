import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

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

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.error("GEMINI_API_KEY is missing in environment variables");
        return res.status(500).json({ error: "Konfigurasi AI belum lengkap di server." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Gagal mendapatkan respon dari AI." });
    }
  });

  // Vite middleware for development
  // Default ke produksi kecuali NODE_ENV secara eksplisit disetel ke 'development'
  const isProduction = process.env.NODE_ENV !== "development";
  
  if (!isProduction) {
    console.log("Starting in DEVELOPMENT mode...");
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (e) {
      console.error("Failed to load Vite, falling back to production mode", e);
      setupProductionMode(app);
    }
  } else {
    console.log("Starting in PRODUCTION mode...");
    setupProductionMode(app);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

function setupProductionMode(app: express.Application) {
  // Saat dibundel ke dist/server.js, __dirname adalah folder dist
  // Jika dijalankan langsung sebagai server.ts, __dirname adalah root
  const isBundled = __dirname.endsWith('dist');
  const distPath = isBundled ? __dirname : path.join(process.cwd(), "dist");
  
  console.log(`Serving static files from: ${distPath}`);
  
  app.use(express.static(distPath));
  app.use((req, res) => {
    const indexPath = path.join(distPath, "index.html");
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error("Error sending index.html:", err);
        res.status(500).send("Error loading application");
      }
    });
  });
}

startServer();
