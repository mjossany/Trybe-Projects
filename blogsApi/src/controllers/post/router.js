const express = require('express');
const { validateToken, validatePost, validatePut } = require('../../middlewares');
const { createPost, getAllPosts, getPostById, putPostById } = require('.');

const router = express.Router({ mergeParams: true });

router.get('/', validateToken, getAllPosts);
router.get('/:id', validateToken, getPostById);
router.post('/', validateToken, validatePost, createPost);
router.put('/:id', validateToken, validatePut, putPostById);

module.exports = router;