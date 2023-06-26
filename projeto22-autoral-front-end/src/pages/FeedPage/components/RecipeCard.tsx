import { Link } from "react-router-dom";
import ImageContainer from "./imageContainer";
import {
  RecipeContainer,
  SuperiorDiv,
  TitleCard,
  InferiorDiv,
  Spacing,
} from "./styles";

import { recipeProps } from "..";

export default function RecipeCard(prop: recipeProps) {
  return (
    <>
      <RecipeContainer>
        <SuperiorDiv>
          <ImageContainer
            to={`/receita/${prop.id}`}
            size={"100%"}
            image={`${prop.img}`}
          />

          <TitleCard>
            <Link style={{ color: "black" }} to={`/receita/${prop.id}`}>
              {prop.name}
            </Link>
          </TitleCard>
        </SuperiorDiv>
        <Spacing />
        <InferiorDiv>{prop.Description}</InferiorDiv>
      </RecipeContainer>
    </>
  );
}
