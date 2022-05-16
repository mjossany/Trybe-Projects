const express = require('express');
const create = require('./create');
const getById = require('./getById');
const list = require('./list');
const update = require('./update');
const remove = require('./remove');
const bodyValidation = require('../../middlewares/products/bodyValidation');
const idValidation = require('../../middlewares/products/idValidation');

const router = express.Router({ mergeParams: true });

router.post('/', bodyValidation, create);
router.get('/', list);
router.get('/:id', idValidation, getById);
router.put('/:id', bodyValidation, update);
router.delete('/:id', idValidation, remove);

module.exports = router;