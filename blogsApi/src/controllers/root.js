const express = require('express');
const userRouter = require('./user/router');
const loginRouter = require('./login/router');
const categoriesRouter = require('./categories/router');
const postRouter = require('./post/router');

const root = express.Router({ mergeParams: true });

root.use('/user', userRouter);
root.use('/login', loginRouter);
root.use('/categories', categoriesRouter);
root.use('/post', postRouter);

module.exports = root;