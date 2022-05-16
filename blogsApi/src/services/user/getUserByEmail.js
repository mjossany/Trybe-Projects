const { User } = require('../../models');

module.exports = async (email) => {
  const user = User.findOne({ where: { email } });

  return user;
};