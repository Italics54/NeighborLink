const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message: userMessage } = req.body || {};

  if (!userMessage) {
    return res.status(400).json({ message: "Message is required" });
  }

  // Read website content
  let websiteContent = "";
  try {
    const filePath = path.join(__dirname, "content.txt");
    websiteContent = fs.readFileSync(filePath, "utf-8");
  } catch (err) {
    console.error("Error reading content.txt:", err);
  }

  try {
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

    res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ reply: "Server error" });
  }
};
