const create = require('./create');
const verifyIds = require('./verifyIds');
const list = require('./list');
const getById = require('./getById');
const update = require('./update');
const remove = require('./remove');
const verifyQuantity = require('./verifyQuantity');
const updateQuantities = require('./updateQuantities');

module.exports = {
  create,
  verifyIds,
  list,
  getById,
  update,
  remove,
  verifyQuantity,
  updateQuantities,
};