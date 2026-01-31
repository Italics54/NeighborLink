import fs from "fs";
import path from "path";
import OpenAI from "openai";

let websiteContent = "";
try {
  const filePath = path.join(__dirname, "content.txt");
  websiteContent = fs.readFileSync(filePath, "utf-8");
} catch (err) {
  console.error("Could not read content.txt:", err);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MAX_CONTENT_CHARS = 15000;

export default async (req: any, res: any) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const userMessage = (req.body?.message || "").trim();
  if (!userMessage) {
    return res.status(400).json({ error: "No message provided" });
  }

  const contentForAI =
    websiteContent.length > MAX_CONTENT_CHARS
      ? websiteContent.slice(-MAX_CONTENT_CHARS)
      : websiteContent;

  const prompt = `
You are an assistant for NeighborLink, a community platform connecting neighbors. Your name is NeighborBot. Introduce yourself.
Use the website content, pages, and resources to answer questions. When answering, remove all extra characters like ** or / or #.
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

    const reply = response.choices?.[0]?.message?.content || "No reply";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI API error:", err);
    return res
      .status(500)
      .json({ reply: "Oops! Something went wrong on the server." });
  }
};
