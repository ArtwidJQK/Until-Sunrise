import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { mkdirSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";

const app = express();
const port = Number(process.env.PORT || 4174);
const secret = process.env.JWT_SECRET || "until-sunrise-local-development-secret";
mkdirSync(new URL("./data/", import.meta.url), { recursive: true });
const db = new DatabaseSync(new URL("./data/until-sunrise.db", import.meta.url));
db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, password_hash TEXT NOT NULL); CREATE TABLE IF NOT EXISTS progress (user_id INTEGER PRIMARY KEY, scene_id TEXT NOT NULL, updated_at TEXT NOT NULL)");
app.use(express.json({ limit: "32kb" }));
app.use((_, res, next) => { res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); next(); });
const userCount = () => db.prepare("SELECT COUNT(*) AS count FROM users").get().count;
const sign = (user) => jwt.sign({ sub: user.id, name: user.name }, secret, { expiresIn: "30d" });
const authenticate = (req, res, next) => { try { req.user = jwt.verify(req.headers.authorization?.replace("Bearer ", "") || "", secret); next(); } catch { res.status(401).json({ error: "Phiên đăng nhập đã hết hạn." }); } };

app.get("/api/health", (_, res) => res.json({ ok: true }));
app.get("/api/auth/status", (_, res) => res.json({ hasAccount: userCount() > 0 }));
app.post("/api/auth/bootstrap", async (req, res) => {
  if (userCount() > 0) return res.status(409).json({ error: "Tài khoản riêng tư đã được tạo." });
  if (typeof req.body.password !== "string" || req.body.password.length < 8) return res.status(400).json({ error: "Mật khẩu cần ít nhất 8 ký tự." });
  const hash = await bcrypt.hash(req.body.password, 12);
  const result = db.prepare("INSERT INTO users (name, password_hash) VALUES (?, ?)").run("Ngọc Anh", hash);
  const user = { id: Number(result.lastInsertRowid), name: "Ngọc Anh" };
  res.status(201).json({ token: sign(user), user: { name: user.name } });
});
app.post("/api/auth/login", async (req, res) => {
  const user = db.prepare("SELECT * FROM users LIMIT 1").get();
  if (!user || !(await bcrypt.compare(req.body.password || "", user.password_hash))) return res.status(401).json({ error: "Mật khẩu chưa đúng." });
  res.json({ token: sign(user), user: { name: user.name } });
});
app.get("/api/progress", authenticate, (req, res) => {
  const progress = db.prepare("SELECT scene_id FROM progress WHERE user_id = ?").get(req.user.sub);
  res.json({ sceneId: progress?.scene_id || "opening" });
});
app.put("/api/progress", authenticate, (req, res) => {
  if (typeof req.body.sceneId !== "string" || req.body.sceneId.length > 64) return res.status(400).json({ error: "Tiến độ không hợp lệ." });
  db.prepare("INSERT INTO progress (user_id, scene_id, updated_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET scene_id = excluded.scene_id, updated_at = excluded.updated_at").run(req.user.sub, req.body.sceneId, new Date().toISOString());
  res.status(204).end();
});
app.listen(port, () => console.log(`Until Sunrise server: http://localhost:${port}`));
