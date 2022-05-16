const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports = (token) => {
  dotenv.config();
  const secret = process.env.JWT_SECRET;

  try {
    const { user } = jwt.verify(token, secret);
    return user;
  } catch (err) {
    return false;
  }
};