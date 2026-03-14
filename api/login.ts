import type { VercelRequest, VercelResponse } from "@vercel/node";
import { supabase } from "../lib/supabase";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST")
      return res.status(405).json({ message: "Method not allowed" });

    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.session)
      return res.status(400).json({ message: error?.message ?? "Invalid email or password" });

    res.status(200).json({
      token: data.session.access_token,
      name: data.user?.user_metadata?.name ?? "User"
    });

  } catch (err: any) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
}