const checkUser = require('./checkUser');
const getUserByEmail = require('./getUserByEmail');
const createUser = require('./createUser');
const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');

module.exports = {
  createUser,
  getUserByEmail,
  checkUser,
  getAllUsers,
  getUserById,
};