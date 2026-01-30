import { OpenAI } from "openai";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  let websiteContent = "";
  try {
    websiteContent = fs.readFileSync("./content.txt", "utf-8");
  } catch (err) {
    console.warn("content.txt not found, continuing without it");
  }

  const { message } = req.body;
  if (!message || message.trim() === "") {
    return res.status(400).json({ reply: "Message cannot be empty" });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: `${websiteContent}\n\n${message}` }
      ],
    });

    const reply = response.choices[0]?.message?.content || "No reply from AI";
    res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ reply: "Server error" });
  }
}