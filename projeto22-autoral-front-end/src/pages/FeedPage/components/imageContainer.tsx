import { Link } from "react-router-dom";
import { ImageDiv } from "./styles";

type imageProps = {
  size?: string;
  image: string;
  to: string;
};

export default function ImageContainer(prop: imageProps) {
  const { size, to, image } = prop;

  return (
    <>
      <ImageDiv>
        <Link to={to}>
          <img style={{ width: size, height: "100%" }} src={image} />
        </Link>
      </ImageDiv>
    </>
  );
}
