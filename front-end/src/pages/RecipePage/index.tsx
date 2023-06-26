import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import {
  RecipeContainer,
  Container,
  RecipeBlock,
  HeadDiv,
  Title,
  RecipeBody,
  Description,
  Ingredients,
  HowTo,
  Spacer,
} from "./styles";
import { useRecipeById } from "../../hooks/api/useRecipes";
import { useState } from "react";
import IngredientsList, { IngredientsType } from "./components/ingredients";
import StepList, { Steps } from "./components/steps";

export default function RecipePage() {
  const [recipeData, setRecipeData] = useState({} as recipeObject);
  const { id } = useParams();
  const { recipe } = useRecipeById(id);

  if (!recipeData.id) {
    if (recipe) {
      const { data } = recipe;
      setRecipeData(data);
    } else {
      return <>loading</>;
    }
  }

  if (recipeData.id) {
    return (
      <>
        <Container>
          <RecipeContainer>
            <RecipeBlock>
              <HeadDiv>
                <img src={recipeData.img} alt="" />
                <Title>{recipeData.name}</Title>
              </HeadDiv>
              <RecipeBody>
                <Description>
                  <h2>Sobre a receita:</h2>
                  {recipeData.Description}
                </Description>
                <h2>Ingredientes:</h2>
                <Ingredients>
                  <IngredientsList Ingredients={recipeData.Ingredients} />
                </Ingredients>
                <HowTo>
                  <h2>Como fazer:</h2>
                  <StepList Steps={recipeData.Steps} />
                </HowTo>
              </RecipeBody>
            </RecipeBlock>
            <Spacer />
          </RecipeContainer>
          <Banner />
        </Container>
      </>
    );
  }
}

type recipeObject = {
  id: number;
  Ingredients: IngredientsType[];
  Description: string;
  name: string;
  img: string;
  Steps: Steps[];
};
