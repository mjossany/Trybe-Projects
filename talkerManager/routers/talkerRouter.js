const express = require('express');
const auth = require('../middlewares/tokenMiddleware');
const { 
  allTalkers,
  validateNewTalker,
  searchByTerm,
  findTalker,
  validateTalkerModificantion,
  deleteTalker,
} = require('../controllers/talker');

const router = express.Router({ mergeParams: true });

router.get('/', allTalkers);
router.post('/', auth, validateNewTalker);
router.get('/search', auth, searchByTerm);
router.get('/:id', findTalker);
router.put('/:id', auth, validateTalkerModificantion);
router.delete('/:id', auth, deleteTalker);

module.exports = router;