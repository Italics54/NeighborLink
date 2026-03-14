const fs = require('fs');
const bcrypt = require('bcrypt');


module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const USERS_FILE = "./users.json";

  function readUsers() {
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
  }

  function saveUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  }

  try {
    const { name, email, password, community } = req.body;

    const users = readUsers();

    const existing = users.find(u => u.email === email);

    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    users.push({
      name,
      email,
      password: hashed,
      community
    });

    saveUsers(users);

    res.status(200).json({
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: `Server error`,
    });
  }
};