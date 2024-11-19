import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3100;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Acessing API",
  });
});

app.get("/index.html", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");
  res.status(200).sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
