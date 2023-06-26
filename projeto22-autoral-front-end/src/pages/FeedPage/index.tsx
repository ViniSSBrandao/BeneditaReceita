import RecipeCard from "./components/RecipeCard";

export type recipeProps = {
  Description: string;
  createdAt: string;
  id: number;
  img: string;
  name: string;
  user?: unknown;
};

export default function FeedPage(prop: recipeProps) {
  return (
    <>
      <RecipeCard
        Description={prop.Description}
        createdAt={prop.createdAt}
        id={prop.id}
        img={prop.img}
        name={prop.name}
      />
    </>
  );
}
