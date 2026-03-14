import type { VercelRequest, VercelResponse } from "@vercel/node";

const { supabase } = require("../lib/supabase");

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, password, community } = req.body || {};

    if (!name || !email || !password || !community) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    if (data.user?.id) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        name,
        community
      });
    }

    res.status(200).json({
      token: data.session?.access_token ?? null,
      name
    });
  } catch (err: any) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};