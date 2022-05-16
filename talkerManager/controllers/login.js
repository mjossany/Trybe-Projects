const crypto = require('crypto');

const login = (_req, res, _next) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({
    token,
  });
};

module.exports = login;