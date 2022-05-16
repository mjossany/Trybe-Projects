const express = require('express');
const loginMiddlewares = require('../../middlewares/login');
const loginControllers = require('.');

const router = express.Router({ mergeParams: true });

router.post('/', loginMiddlewares.validateLogin, loginControllers.login);

module.exports = router;