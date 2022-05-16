const { USER_NOT_FOUND } = require('../../errors');
const { User } = require('../../models');

module.exports = async (userId) => {
  const response = await User.findOne({
    where: { id: userId },
    attributes: { exlude: ['password'] },
  });

  if (!response) throw USER_NOT_FOUND;

  return response;
};