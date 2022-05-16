const express = require('express');
const usersRouter = require('./users/router');
const recipesRouter = require('./recipes/router');
const loginRouter = require('./login/router');

const root = express.Router({ mergeParams: true });

root.use('/users', usersRouter);
root.use('/recipes', recipesRouter);
root.use('/login', loginRouter);

module.exports = root;