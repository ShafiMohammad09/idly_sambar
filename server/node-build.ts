import { createServer } from "../server";
import fs from "fs";
import path from "path";
import express from "express";

const app = createServer();
const PORT = process.env.PORT || 3000;

// Serve static files from the client build
const spaDir = path.join(import.meta.dirname, "../dist/spa");
if (fs.existsSync(spaDir)) {
  app.use(express.static(spaDir));

  // Fallback to index.html for client-side routing
  app.get("*", (_req, res) => {
    res.sendFile(path.join(spaDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
