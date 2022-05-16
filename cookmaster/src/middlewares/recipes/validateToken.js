const jwt = require('jsonwebtoken');

const secret = 'cookmasterpassword';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const { _id, email, role } = decoded;
    req.loggedUserInfos = { _id, email, role };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};
