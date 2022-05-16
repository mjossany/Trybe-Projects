const createModel = require('./create');
const getByNameModel = require('./getByName');
const listModel = require('./list');
const getByIdModel = require('./getById');
const updateModel = require('./update');
const removeModel = require('./remove');

module.exports = (collection) => ({
  list: async () => listModel(collection),
  getById: async (id) => getByIdModel(collection, id),
  create: async (document) => createModel(collection, document),
  getByName: async (name) => getByNameModel(collection, name),
  update: async (document) => updateModel(collection, document),
  remove: async (id) => removeModel(collection, id),
});