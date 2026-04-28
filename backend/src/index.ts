import express from "express";
import cors from "cors";
import { pool } from "./db/db";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/test-db", async (req, res) => {
  const result = await pool.query("SELECT * FROM colleges");
  res.json(result.rows);
});

pool.query("SELECT 1")
  .then(() => console.log("DB Connected ✅"))
  .catch((err: any) => console.error("DB Error ❌", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});