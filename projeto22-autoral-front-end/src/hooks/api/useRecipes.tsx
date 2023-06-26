import useAsync from "../useAsync";

import * as Recipes from "../../services/useRecipes";

export function useRecipeList() {
  const {
    data: recipes,
    loading: recipesLoading,
    error: recipesError,
    act: getRecipes,
  } = useAsync(() => Recipes.getRecipeList());

  return {
    recipes,
    recipesLoading,
    recipesError,
    getRecipes,
  };
}

export function usePostRecipe(
  name: string,
  Description: string,
  img: string,
  HowTo: string,
  Ingredients: Recipes.Ingredients
) {
  const {
    data: recipes,
    loading: recipesLoading,
    error: recipesError,
    act: getRecipes,
  } = useAsync(() =>
    Recipes.postRecipe({ name, Description, img, HowTo, Ingredients })
  );

  return {
    recipes,
    recipesLoading,
    recipesError,
    getRecipes,
  };
}

export function useRecipeById(id: string | undefined) {
  const {
    data: recipe,
    loading: recipesLoading,
    error: recipesError,
    act: getRecipes,
  } = useAsync(() => Recipes.getRecipeById(id));

  return {
    recipe,
    recipesLoading,
    recipesError,
    getRecipes,
  };
}
