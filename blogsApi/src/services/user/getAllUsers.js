const { User } = require('../../models');

module.exports = () => {
  const users = User.findAll();

  return users;
};