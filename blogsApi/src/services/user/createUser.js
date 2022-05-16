const { ALREADY_REGISTERED } = require('../../errors');
const { User } = require('../../models');
const { generateToken } = require('../helpers');
const getUserByEmail = require('./getUserByEmail');

module.exports = async (userInfos) => {
  const { email } = userInfos;

  const emailExists = await getUserByEmail(email);

  if (emailExists) throw ALREADY_REGISTERED;

  const response = await User.create(userInfos);

  return generateToken(response);
};