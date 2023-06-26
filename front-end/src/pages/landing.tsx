import FeedPage from "./FeedPage";
import { useRecipeList } from "../hooks/api/useRecipes";
import { useState } from "react";
import { FeedContainer, GlobalStyles, Welcome } from "./RecipePage/styles";
import useToken from "../hooks/api/usetoken";
import styled from "styled-components";


export default function Landing() {
  const [recipeList, setRecipeList] = useState<Recipe>([{}] as Recipe);
  const [hideGreet, setHideGreet] = useState('')
  const { recipes } = useRecipeList();
  const token = useToken()
  
  if (!recipeList[0].id) {
    if (recipes) {
      const { data } = recipes;
      setRecipeList(data);
    } else {
      return <>loading</>;
    }
  }


  setTimeout(() => {
    setHideGreet('none')
  }, 5000);
  

  return (
    <>
    {typeof(token) == 'string' ?<Welcome style={{display:hideGreet}}>Bem-Vindo(a) de volta, Chef!</Welcome>: ''}
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
