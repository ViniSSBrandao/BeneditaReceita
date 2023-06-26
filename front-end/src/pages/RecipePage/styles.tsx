import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  position: fixed;
  right: 0;
  top: 120px;
  z-index: 1;
  height: 100vh;
  font-family: "Ubuntu", sans-serif;
`;

export const RecipeBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 80%;
  background-color: #faf6d0;
  padding: 50px;
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: 60px;
`;

export const RecipeContainer = styled.div`
  width: 100vw;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 120px;
  color: black;
  background-image: linear-gradient(to bottom, #ba541430, #ba5414);
  z-index: 1;
  height: 100vh;

  font-family: "Ubuntu", sans-serif;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffa600;
    border-radius: 15px;
    min-height: 30px;
    overflow: auto;
    border: 4px solid transparent;
    background-clip: padding-box;
    transition: height 0.2s ease-in-out;
    padding: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #008cff40;
    border: 0px solid transparent;
    box-shadow: none;
  }
`;

export const Title = styled.span`
  font-family: "Passion One", cursive;
  font-size: 20px;
  width: 50%;
  font-weight: bolder;
  position: relative;
  height: max-content;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  word-wrap: break-word;
  color: #6d3a00;
  @media screen and (min-width: 600px) {
    font-size: 30px;
  }
  @media screen and (min-width: 800px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 50px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 80px;
  }
`;

export const HeadDiv = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  img {
    @media screen and (max-width: 1300px) {
      max-height: 250px;
    }
    @media screen and (max-width: 2000px) {
      max-height: 400px;
    }
    @media screen and (max-width: 2800px) {
      max-height: 600px;
    }
    max-height: 800px;
    position: relative;
    width: 50%;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3),
      -3px 3px 3px 1px rgba(0, 0, 0, 0.3);
  }
`;

export const RecipeBody = styled.div`
  margin-top: 2.5vh;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: justify;
`;

export const Description = styled.div``;

export const Ingredients = styled.div`
  font-weight: 800;
  text-align: start;
  padding-left: 3vw;
`;

export const HowTo = styled.div``;

export const Spacer = styled.div`
  height: 200px;
  width: 150px;
`;

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: #dbdbdb;
    z-index: 0;
    overflow-y: scroll;
    padding-bottom: 100px;
  }

`;

export const FeedContainer = styled.div`
  top: 40px;
  position: relative;
  width: 85vw;
  display: flex;
  background-color: bisque;
`;
