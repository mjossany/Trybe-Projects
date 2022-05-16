const { CONFLICT, UNAUTHORIZED, BAD_REQUEST, NOT_FOUND } = require('http-status-codes').StatusCodes;

const ALREADY_REGISTERED = {
  status: CONFLICT,
  message: 'User already registered',
};

const UNREGISTERED_USER = {
  status: BAD_REQUEST,
  message: 'Invalid fields',
};

const INCORRECT_PASSWORD = {
  status: UNAUTHORIZED,
  message: 'incorrect password',
};

const REQUIRED_FIELD = (field) => ({ 
  status: BAD_REQUEST, 
  message: `"${field}" is required`,
});

const EMPTY_FIELD = (field) => ({
  status: BAD_REQUEST,
  message: `"${field}" is not allowed to be empty`,
});

const MIN_CHARACTER_LENGTH = (fieldName, number) => ({
  status: BAD_REQUEST,
  message: `"${fieldName}" length must be at least ${number} characters long`,
});

const INVALID_EMAIL = {
  status: BAD_REQUEST,
  message: '"email" must be a valid email',
};

const CHARACTER_LENGTH = (fieldName, number) => ({
  status: BAD_REQUEST,
  message: `"${fieldName}" length must be ${number} characters long`,
});

const TOKEN_NOT_FOUND = {
  status: UNAUTHORIZED,
  message: 'Token not found',
};

const INVALID_TOKEN = {
  status: UNAUTHORIZED,
  message: 'Expired or invalid token',
};

const USER_NOT_FOUND = {
  status: NOT_FOUND,
  message: 'User does not exist',
};

const CATEGORY_NOT_FOUND = {
  status: BAD_REQUEST,
  message: '"categoryIds" not found',
};

const POST_NOT_FOUND = {
  status: NOT_FOUND,
  message: 'Post does not exist',
};

const CATEGORIES_NOT_ALLOWED = {
  status: BAD_REQUEST,
  message: 'Categories cannot be edited',
};

const UNAUTHORIZED_USER = {
  status: UNAUTHORIZED,
  message: 'Unauthorized user',
};

module.exports = {
  ALREADY_REGISTERED,
  UNREGISTERED_USER,
  INCORRECT_PASSWORD,
  REQUIRED_FIELD,
  EMPTY_FIELD,
  MIN_CHARACTER_LENGTH,
  INVALID_EMAIL,
  CHARACTER_LENGTH,
  TOKEN_NOT_FOUND,
  INVALID_TOKEN,
  USER_NOT_FOUND,
  CATEGORY_NOT_FOUND,
  POST_NOT_FOUND,
  CATEGORIES_NOT_ALLOWED,
  UNAUTHORIZED_USER,
};