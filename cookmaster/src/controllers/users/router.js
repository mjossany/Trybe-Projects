const express = require('express');
const usersControllers = require('.');
const usersMiddlewares = require('../../middlewares/users');

const router = express.Router({ mergeParams: true });

router.post('/', usersMiddlewares.validateBody, usersControllers.createUser);

module.exports = router;