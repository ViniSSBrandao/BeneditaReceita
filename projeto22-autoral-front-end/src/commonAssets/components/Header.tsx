import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdPerson } from "react-icons/io";

export default function Header() {
  return (
    <>
      <Container>
        <Link to={"/nova-receita/"}>
          <span style={{ height: "25px" }}>+</span>
        </Link>
        <div>
          <Link to={"/"}>
            <h1>Benedita Receita</h1>
          </Link>
        </div>
        <StyledImage>
          <div>
            <Link to={"/login"}>
              <IoMdPerson size={"30px"} />
            </Link>
          </div>
        </StyledImage>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 60px;
  h1 {
    font-family: "Passion One", cursive;
  }
  a:visited {
    color: #fff6e2;
  }
  user-select: none;
  background-color: #ff531c;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  @media (max-width: 500px) {
    h1 {
      font-size: 2.5em;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2.2em;
    }
  }
  span {
    font-weight: 800;
    a:visited {
      color: #000000;
    }
    a {
      color: #000000;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    color: #644501;
    position: fixed;
    top: 18px;
    border-radius: 25px;
    width: 25px;
    background-color: #ffbb00;
    left: 4%;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const StyledImage = styled.div`
  position: fixed;
  top: 15px;
  right: 3%;
  z-index: 3;
`;
