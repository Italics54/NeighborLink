const express = require("express");
const cors = require("cors");
const fs = require("fs");
// require("dotenv").config();
const OpenAI = require("openai");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const USERS_FILE = "./users.json";

function readUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

/* ===============================
   AUTH ROUTES
================================*/

// SIGNUP
app.post("/api/signup", async (req, res) => {
  const { name, email, password, community } = req.body;

  const users = readUsers();

  const existing = users.find(u => u.email === email);

  if (existing) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  users.push({
    name,
    email,
    password: hashed,
    community
  });

  saveUsers(users);

  res.json({ message: "User created successfully" });
});


// LOGIN
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });

  res.json({
    token,
    name: user.name
  });
});

let websiteContent = "";

try {
  websiteContent = fs.readFileSync("./content.txt", "utf-8");
} catch {}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `${websiteContent}\n\n${userMessage}`
        }
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch {
    res.status(500).json({ reply: "Server error" });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
