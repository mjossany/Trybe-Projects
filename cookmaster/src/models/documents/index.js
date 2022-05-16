const findByEmailModel = require('./findByEmail');
const createUserModel = require('./createUser');
const createRecipeModel = require('./createRecipe');
const getAllRecipesModel = require('./getAllRecipes');
const getRecipeModel = require('./getRecipe');
const updateRecipeModel = require('./updateRecipe');
const deleteRecipeModel = require('./deleteRecipe');

module.exports = (collection) => ({
  findByEmail: async (email) => findByEmailModel(collection, email),
  createUser: async (document) => createUserModel(collection, document),
  createRecipe: async (document) => createRecipeModel(collection, document),
  getAllRecipes: async () => getAllRecipesModel(collection),
  getRecipe: async (id) => getRecipeModel(collection, id),
  updateRecipe: async (document) => updateRecipeModel(collection, document),
  deleteRecipe: async (id) => deleteRecipeModel(collection, id),
});