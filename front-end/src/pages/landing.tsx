import FeedPage from "./FeedPage";
import { useRecipeList } from "../hooks/api/useRecipes";
import { useState } from "react";
import { FeedContainer, GlobalStyles } from "./RecipePage/styles";
import useToken from "../hooks/api/usetoken";
import styled from "styled-components";

export default function Landing() {
  const [recipeList, setRecipeList] = useState<Recipe>([{}] as Recipe);
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
  

  return (
    <>
    {/* {token?<Welcome></Welcome>: ''} */}
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

const Welcome = styled.div`
  width: 230px;
  height: 100px;
  background-color: #ff6011;
  position: fixed;
  top: 160px;
  right: 5%;
  z-index: 3;
`