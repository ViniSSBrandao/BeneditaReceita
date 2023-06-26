import { prisma } from '../../config/database';
import { IncompleteRecipeError } from '../../errors/IncompleteRecipe';
import { Recipe, Steps } from '../../../node_modules/.prisma/client/index';

async function addRecipe(name: string, Description: string, img: string, userId?: number) {
  const query = await prisma.recipe.create({
    data: {
      name,
      Description,
      img,
      userId,
    },
  });

  return query;
}

async function findRecipes() {
  const query = await prisma.recipe.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      Ingredients: true,
    },
  });
  return query;
}

async function addIngredients(RecipeId: number, quantity: number, name: string, measureUnit: string) {
  try {
    const query = await prisma.ingredients.create({
      data: {
        RecipeId,
        quantity,
        name,
        measureUnit,
      },
    });

    return query;
  } catch (err) {
    throw IncompleteRecipeError();
  }
}

async function addSteps(RecipeId: number, Description: string, img: string | null, step: number): Promise<Steps> {
  try {
    const query = await prisma.steps.create({
      data: {
        RecipeId,
        Description,
        img,
        step,
      },
    });

    return query;
  } catch (err) {
    throw IncompleteRecipeError();
  }
}

async function getRecipeById(id: number): Promise<Recipe> {
  const query = await prisma.recipe.findUnique({
    where: { id },
    include: { Ingredients: true, Steps: { orderBy: { step: 'asc' } }, User: true },
  });
  return query;
}

export default {
  addRecipe,
  findRecipes,
  addIngredients,
  getRecipeById,
  addSteps,
};
