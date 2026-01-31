const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const userMessage = (req.body?.message || "").trim();
    if (!userMessage) {
      return res.status(400).json({ message: "Message is required" });
    }

    let websiteContent = "";
    try {
      const filePath = path.join(__dirname, "content.txt");
      websiteContent = fs.readFileSync(filePath, "utf-8").slice(0, 2000);
    } catch (err) {
      console.warn("Warning: content.txt not found or unreadable. Continuing without it.");
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `${websiteContent}\n\n${userMessage}`,
        },
      ],
    });

    const reply = response.choices?.[0]?.message?.content || "No reply";

    return res.status(200).json({ reply });

  } catch (err) {
    console.error("Chat serverless error:", err);
    return res.status(500).json({ reply: "Server error" });
  }
};
