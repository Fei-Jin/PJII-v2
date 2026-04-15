import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // API routes can be added here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
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
  app.get("*", (req, res) => {
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
