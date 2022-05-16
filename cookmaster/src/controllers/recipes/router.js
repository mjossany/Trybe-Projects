const express = require('express');
const recipesMiddlewares = require('../../middlewares/recipes');
const recipesControllers = require('.');

const router = express.Router({ mergeParams: true });

router.post(
  '/', 
  recipesMiddlewares.validateBody, 
  recipesMiddlewares.validateToken, 
  recipesControllers.createRecipe,
);
router.get(
  '/',
  recipesControllers.getAllRecipes,
);
router.get(
  '/:id',
  recipesMiddlewares.validateId,
  recipesControllers.getRecipe,
);
router.delete(
  '/:id',
  recipesMiddlewares.validateToken,
  recipesControllers.deleteRecipe,
);
router.put(
  '/:id',
  recipesMiddlewares.validateToken,
  recipesControllers.updateRecipe,
);
router.put(
  '/:id/image',
  recipesMiddlewares.validateToken,
  recipesMiddlewares.addImage.single('image'),
  recipesControllers.addImage,
);

module.exports = router;