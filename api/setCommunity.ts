import type { VercelRequest, VercelResponse } from "@vercel/node";

const { supabase } = require("../lib/supabase");

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { userId, community } = req.body || {};

    if (!userId || !community) {
      return res.status(400).json({ message: "User ID and community are required" });
    }

    const { data, error } = await supabase
      .from("users")
      .update({ community })
      .eq("email", userId)
      .select();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(200).json({
      message: "Community updated successfully",
      community: data?.[0]?.community
    });

  } catch (err: any) {
    console.error("Update community error:", err);
    res.status(500).json({ 
      message: "Internal server error", 
      error: err.message 
    });
  }
};