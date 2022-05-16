const express = require('express');
const { validateUser, validateToken } = require('../../middlewares');
const { createUser, getAllUsers, getUserById } = require('.');

const router = express.Router({ mergeParams: true });

router.get('/', validateToken, getAllUsers);
router.get('/:id', validateToken, getUserById);
router.post('/', validateUser, createUser);

module.exports = router;