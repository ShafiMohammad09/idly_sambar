import express from "express";
import cors from "cors";
import { DemoResponse } from "@shared/api";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/demo", (_req, res) => {
    const response: DemoResponse = {
      message: "Hello from the server!",
    };
    res.json(response);
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  return app;
}
