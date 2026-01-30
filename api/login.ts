const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const { email, password } = req.body || {};

  const filePath = path.join(__dirname, 'users.json');
  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const user = users.find(
    u =>
      u.email.trim() === email.trim() &&
      u.password.trim() === password.trim()
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({
    token: 'fake-token',
    name: user.name
  });
};
