const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const userMessage = (req.body?.message || "").trim();
  if (!userMessage) return res.status(400).json({ message: "Message required" });

  let websiteContent = "";
  try {
    const filePath = path.join(__dirname, "content.txt");
    websiteContent = fs.readFileSync(filePath, "utf-8").slice(0, 2000);
  } catch (err) {
    console.warn("content.txt missing");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: `${websiteContent}\n\n${userMessage}` }],
    });

    const reply = response.choices?.[0]?.message?.content || "No reply";
    res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI call failed:", err);
    res.status(500).json({ reply: "Server error" });
  }
};
