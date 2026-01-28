import express from "express";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let websiteContent = "";
try {
  websiteContent = fs.readFileSync("./content.txt", "utf-8");
  console.log(`✅ Loaded content.txt, ${websiteContent.length} characters`);
} catch (err) {
  console.error("Could not read content.txt:", err);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const MAX_CONTENT_CHARS = 15000;

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "No message provided" });
  }

  const contentForAI =
    websiteContent.length > MAX_CONTENT_CHARS
      ? websiteContent.slice(-MAX_CONTENT_CHARS)
      : websiteContent;

  const prompt = `
You are an assistant for NeighborLink, a community platform connecting neighbors.  Your name is NeighborBot. Introduce yourself.
Use the website content, pages, and resources to answer questions. When answering, remove all extra characters like ** or / or #
If you do list out steps for the user to use, format like this:
1. first step
2. second step
(any other info)
If the user asks something you don’t know exactly, try to provide:
AI Guidance:  
- Always provide helpful and actionable answers based on the NeighborLink website.  
- Suggest relevant pages or steps if the exact answer is not available.  
- Explain reasoning briefly if information is inferred from the website content.  
- Focus only on NeighborLink content; do not provide unrelated external information.

Website content:
${contentForAI}

User question:
${userMessage}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("OpenAI API error:", err);

    res.status(500).json({ reply: "Oops! Something went wrong on the server." });
  }
});

app.listen(PORT, () => {
      const contentForAI =
    websiteContent.length > MAX_CONTENT_CHARS
      ? websiteContent.slice(-MAX_CONTENT_CHARS)
      : websiteContent;
  console.log(`✅ Chatbot backend running at http://localhost:${PORT}`);
  console.log('what content', contentForAI)
});
