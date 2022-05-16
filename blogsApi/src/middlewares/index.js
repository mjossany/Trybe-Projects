const error = require('./error');
const validateUser = require('./validateUser');
const validateLogin = require('./validateLogin');
const validateToken = require('./validateToken');
const validateCategory = require('./validateCategory');
const validatePost = require('./validatePost');
const validatePut = require('./validatePut');

module.exports = {
  error,
  validateUser,
  validateLogin,
  validateToken,
  validateCategory,
  validatePost,
  validatePut,
};