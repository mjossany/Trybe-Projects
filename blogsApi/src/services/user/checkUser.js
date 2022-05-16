const { UNREGISTERED_USER } = require('../../errors');
const { generateToken } = require('../helpers');
const getUserByEmail = require('./getUserByEmail');

module.exports = async (userInfos) => {
  const { email } = userInfos;
  const userRegistered = await getUserByEmail(email);

  if (!userRegistered) throw UNREGISTERED_USER;

  return generateToken(userRegistered);
};