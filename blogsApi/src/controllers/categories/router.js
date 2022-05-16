const express = require('express');
const { validateToken, validateCategory } = require('../../middlewares');
const { createCategory, getAllCategories } = require('.');

const router = express.Router({ mergeParams: true });

router.get('/', validateToken, getAllCategories);
router.post('/', validateCategory, validateToken, createCategory);

module.exports = router;