import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
margin-top: 10%;
  background-color: #f58032;
  position: relative;
  right: 5%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  border-radius: 35px;
  padding: 15px;
  box-sizing: border-box;
  span {
    margin-bottom: 5px;
  }
  @media (max-width: 900px) {
    width: 110%;
  }
  h2 {
    font-size: xx-large;
    margin-bottom: 15px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  input {
    border-style: solid;
    border-width: 1px;
    height: 65px;
    width: 429px;
    margin-bottom: 13px;
    padding-left: 17px;
    box-sizing: border-box;
    border-radius: 60px;
    font-family: "Oswald", sans-serif;
    font-size: 27px;
    font-weight: 700;
    line-height: 40px;
    color: #000000;
    @media (max-width: 900px) {
      height: 55px;
      width: 100%;
      font-size: 22px;
    }
  }
  input::placeholder {
    color: #9f9f9f;
  }
`;

export const BigInputs = styled.div`
  input {
    word-wrap: break-word;
    height: 200px;
  }
  input::placeholder {
    text-align: center;
  }
`;

export const Button = styled.button`
  margin-left: 50px;
  margin-right: 50px;
  background-color: #d47603;
  border: none;
  margin-bottom: 36px;
  height: 65px;
  width: 90%;
  border-radius: 25px;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 26px;
  @media (max-width: 900px) {
    height: 55px;
    width: 90%;
    font-size: 22px;
  }
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 900px) {
    font-size: 17px;
  }
`;

export const Globalstyles = createGlobalStyle`
    
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	
	background-color:#c5b198;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1{
	font-size: 43px;
	color: white;
	font-family: Oswald;
}
* {
	box-sizing: border-box;
}
`;

export const StepAdded = styled.div`
background-color: #FFB80A;
color: #3b3b3b;
  width: 230px;
  height: 100px;
  position: fixed;
  font-size: large;
  font-weight: 600;
  top: 160px;
  right: 5%;
  z-index: 3;
  padding-top: 40px;
  font-family: Oswald;
  box-sizing: border-box;
  border-radius: 15px;
  
`
