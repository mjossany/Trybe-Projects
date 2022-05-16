const express = require('express');
const login = require('./login');
const { validateLogin } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', validateLogin, login);

module.exports = router;