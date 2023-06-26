import styled from "styled-components";

export const TitleCard = styled.div`
  height: 20vw;
  position: relative;
  width: 50%;
  font-size: xxx-large;
  overflow: hidden;
  :visited {
    color: black;
  }
`;

export const InferiorDiv = styled.div`
  width: 100%;
  height: 58%;
  font-size: xx-large;
  overflow-y: scroll;
  padding-right: 5px;
  text-indent: 15%;
  text-align: justify;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 15px;
    min-height: 30px;
    overflow: auto;
    border: 4px solid transparent;
    background-clip: padding-box;
    transition: height 0.2s ease-in-out;
    padding: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #00000040;
    border: 0px solid transparent;
    box-shadow: none;
  }
`;

export const SuperiorDiv = styled.div`
  height: fit-content;
  max-height: 280px;
  display: flex;
`;

export const RecipeContainer = styled.div`
  padding: 30px;
  height: 800px;
  width: 100%;
  top: 160px;
  margin-top: 60px;
  margin-bottom: 60px;
  color: black;
  background-color: white;
  z-index: 1;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
  overflow-x: hidden;
`;

export const ImageDiv = styled.div`
  width: 50%;
  padding-right: 20%;
  box-sizing: border-box;
  img {
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3),
      -3px 3px 3px 1px rgba(0, 0, 0, 0.3);
  }
`;
export const Spacing = styled.div`
  height: 15%;
  max-height: 15px;
`;
