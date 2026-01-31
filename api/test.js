const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (req, res) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Hello world" }],
    });

    const reply = response.choices?.[0]?.message?.content || "No reply";
    res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI call failed:", err);
    res.status(500).json({ error: err.message });
  }
};
