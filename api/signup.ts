export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, password, community } = req.body;


  res.status(200).json({
    token: 'fake-token',
    name
  });
}
