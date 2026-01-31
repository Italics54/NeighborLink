module.exports = (req, res) => {
  console.log("Test function called");
  res.status(200).json({ message: "Serverless working!" });
};
