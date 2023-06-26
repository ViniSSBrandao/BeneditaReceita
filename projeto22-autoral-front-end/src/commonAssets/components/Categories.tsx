import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Categories() {
  return (
    <>
      <Container>
        <span>
          <IconContext.Provider
            value={{
              color: "dark-grey",
              className: "global-class-name",
              size: "75%",
            }}>
            <IoIosSearch></IoIosSearch>
          </IconContext.Provider>
        </span>
        <div>Doces</div>
        <div>Salgados</div>
        <div>Bebidas</div>
        <div>Carnes</div>
        <div>Snack</div>
        <div>Bolos & Tortas</div>
        <div>Saladas</div>
        <div>Ver todas</div>
      </Container>
      <MoreOptions></MoreOptions>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #ff910f;
  position: fixed;
  top: 60px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  text-shadow: 0px 1px #424242;
  div {
    font-size: larger;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: #c2700d;
      width: 115%;
      cursor: pointer;
    }
  }
  /* ff910f */
  /* c2700d */
  span {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    display: flex;
    position: relative;
    padding-left: 10px;
    right: 10px;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: #c2700d;
      width: 100%;
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    div {
      display: none;

      :nth-of-type(2),
      :nth-of-type(1),
      :nth-last-of-type(1) {
        display: flex;
      }
    }
  }
`;

const MoreOptions = styled.div``;
