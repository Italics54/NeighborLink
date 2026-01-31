const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

if (!process.env.OPENAI_API_KEY) {
    console.log('no key');
} else {
    console.log(process.env.OPENAI_API_KEY);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (req, res) => {
  console.log("Function called");

  if (req.method !== "POST") {
    console.log("Invalid method:", req.method);
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userMessage = (req.body.message || "").trim();
  console.log("User message:", userMessage);

  if (!userMessage) {
    console.log("No user message");
    return res.status(400).json({ message: "Message is required" });
  }

  let websiteContent = "";
  try {
    const filePath = path.join(__dirname, "content.txt");
    console.log("Reading file:", filePath);
    websiteContent = fs.readFileSync(filePath, "utf-8").slice(0, 2000);
    console.log("Website content length:", websiteContent.length);
  } catch (err) {
    console.error("Error reading content.txt:", err);
  }

  try {
    console.log("Calling OpenAI...");
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: `${websiteContent}\n\n${userMessage}` },
      ],
    });

    console.log("OpenAI response received");

    const reply = response.choices?.[0]?.message?.content || "No reply";
    console.log("Reply:", reply);

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI call failed:", err);
    return res.status(500).json({ reply: "Server error" });
  }
};