const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

module.exports = (userInfos) => {
  dotenv.config();
  const secret = process.env.JWT_SECRET;

  const { password, ...user } = userInfos;
  const jwtConfig = { algorithm: 'HS256' };

  const token = jwt.sign({ user }, secret, jwtConfig);

  return token;
};