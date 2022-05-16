const express = require('express');
const loginMiddleware = require('../middlewares/loginMiddleware');
const login = require('../controllers/login');

const router = express.Router({ mergeParams: true });

router.post('/', loginMiddleware, login);

module.exports = router;