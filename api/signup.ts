module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name } = req.body || {};

  res.status(200).json({
    token: 'fake-token',
    name
  });
};
