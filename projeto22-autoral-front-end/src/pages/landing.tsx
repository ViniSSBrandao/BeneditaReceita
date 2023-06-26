import FeedPage from "./FeedPage";
import { useRecipeList } from "../hooks/api/useRecipes";

import { useState } from "react";
import { FeedContainer, GlobalStyles } from "./RecipePage/styles";

export default function Landing() {
  const [recipeList, setRecipeList] = useState<Recipe>([{}] as Recipe);
  const { recipes } = useRecipeList();

  if (!recipeList[0].id) {
    if (recipes) {
      const { data } = recipes;
      setRecipeList(data);
    } else {
      return <>loading</>;
    }
  }

  return (
    <>
      <FeedContainer></FeedContainer>
      {recipeList.map((e) => (
        <FeedPage
          key={e.id}
          Description={e.Description}
          createdAt={e.createdAt}
          id={e.id}
          img={e.img}
          name={e.name}
        />
      ))}

      <GlobalStyles />
    </>
  );
}

type Recipe = [
  {
    Description: string;
    createdAt: string;
    id: number;
    img: string;
    name: string;
  }
];
