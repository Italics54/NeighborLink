import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type User = {
  name: string;
  email: string;
  password: string;
  community?: string;
};

const USERS_FILE = path.join(process.cwd(), "users.json");
const JWT_SECRET = "secret";

function readUsers(): User[] {
  const data = fs.readFileSync(USERS_FILE, "utf8");
  return JSON.parse(data);
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const users = readUsers();

    const user = users.find((u) => u.email === email);

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      token,
      name: user.name,
      email: user.email,
    });

  } catch (err: any) {
    console.error("Login error:", err);

    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
}