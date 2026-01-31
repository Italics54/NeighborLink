// const OpenAI = require("openai");
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


module.exports = (req, res) => {
  console.log("Test function called");
  // console.log('whats the key', openai);
  // console.log('twice', process.env.OPENAI_API_KEY);
  res.status(200).json({ message: "Serverless working!" });
};
