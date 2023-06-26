import { IncompleteRecipeError } from '../../errors/IncompleteRecipe';
import { badRequestError } from '../../errors/BadRequestError';
import { notFoundError } from '../../errors/NotFoundError';
import recipeRepositories from '../../repositories/recipe-repositories';
import userRepositories from '../../repositories/user-repositories';
import { Ingredients, Steps } from '../../../node_modules/.prisma/client/index';

async function createRecipe(
  name: string,
  Description: string,
  img: string,
  ingredients: Omit<Ingredients, 'id, RecipeId'>[],
  Steps: Omit<Steps, 'id, RecipeId'>[],
  userId?: number,
) {
  if (name == undefined || Description === undefined || img === undefined || ingredients === undefined) {
    throw IncompleteRecipeError();
  }

  if (userId != undefined) {
    const user = await userRepositories.findUser(userId);
    if (!user) throw badRequestError('Invalid UserId Error');
  }

  const Recipe = await recipeRepositories.addRecipe(name, Description, img, userId);
  const RecipeId = Recipe.id;

  ingredients.map(async (i) => {
    await recipeRepositories.addIngredients(RecipeId, i.quantity, i.name, i.measureUnit);
  });

  Steps.map(async (i) => {
    await recipeRepositories.addSteps(RecipeId, i.Description, i.img, i.step);
  });

  return Recipe;
}

async function findRecipes() {
  const recipes = await recipeRepositories.findRecipes();
  if (recipes.length == 0) {
    throw notFoundError('Recipes');
  }
  return recipes;
}

async function findRecipeById(id: number) {
  const recipe = await recipeRepositories.getRecipeById(id);

  if (!recipe) {
    throw notFoundError('Recipe');
  }

  return recipe;
}

export default { createRecipe, findRecipes, findRecipeById };
