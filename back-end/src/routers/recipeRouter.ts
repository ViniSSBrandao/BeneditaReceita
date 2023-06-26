import { Router } from 'express';
import { addRecipies, getRecipeById, getRecipes } from '../controllers/recipeController';
import { validateBody } from '@/middlewares/validationMiddleware';
import { recipeSchema } from '@/schemas/RecipeSchema';
const recipesRouter = Router();

recipesRouter.post('', validateBody(recipeSchema), addRecipies).get('', getRecipes).get('/:id', getRecipeById);

export { recipesRouter };
