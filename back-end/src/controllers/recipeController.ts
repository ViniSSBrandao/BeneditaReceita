import { badRequestError } from '../errors/BadRequestError';
import recipeServices from '../services/recipe-services';
import { Ingredients, Steps } from '.prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export async function addRecipies(req: Request, res: Response, Next: NextFunction) {
  try {
    const {
      userId,
      name,
      Description,
      img,
      Ingredients,
      Steps,
    }: {
      userId: number;
      name: string;
      Description: string;
      img: string;
      Ingredients: Omit<Ingredients, 'id, RecipeId'>[];
      Steps: Omit<Steps, 'id, RecipeId'>[];
    } = req.body;

    const createRecipe = await recipeServices.createRecipe(name, Description, img, Ingredients, Steps, userId);

    return res.status(httpStatus.CREATED).send(createRecipe);
  } catch (error) {
    Next(error);
  }
}

export async function getRecipes(req: Request, res: Response, Next: NextFunction) {
  try {
    const recipes = await recipeServices.findRecipes();

    return res.status(httpStatus.OK).send(recipes);
  } catch (error) {
    Next(error);
  }
}

export async function getRecipeById(req: Request, res: Response, Next: NextFunction) {
  try {
    const { id } = req.params;

    const recipeId = parseInt(id);
    if (!recipeId) {
      throw badRequestError();
    }
    const recipe = await recipeServices.findRecipeById(recipeId);

    return res.status(httpStatus.OK).send(recipe);
  } catch (error) {
    Next(error);
  }
}
