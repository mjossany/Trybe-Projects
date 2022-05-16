const express = require('express');
const bodyValidation = require('../../middlewares/sales/bodyValidation');
const idValidation = require('../../middlewares/sales/idValidation');
const create = require('./create');
const list = require('./list');
const getById = require('./getById');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', bodyValidation, create);
router.get('/', list);
router.get('/:id', idValidation, getById);
router.put('/:id', bodyValidation, update);
router.delete('/:id', idValidation, remove);

module.exports = router;