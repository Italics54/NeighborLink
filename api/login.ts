export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // TODO: replace with real database check
  if (email === 'test@test.com' && password === '1234') {
    return res.status(200).json({
      token: 'fake-jwt-token',
      name: 'Test User'
    });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
}
