import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import morgan from "morgan";
import contactRouter from "./contact.js";

const PORT = process.env.PORT || 3001;
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");

const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "20kb" }));

app.use("/api/contact", contactRouter);
app.use("/api", (_req, res) => res.status(404).json({ error: "Not found" }));

// In production, serve the built React app and let it handle client-side routes.
app.use(express.static(dist));
app.get("/{*splat}", (_req, res) => res.sendFile(path.join(dist, "index.html")));

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
