import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 535px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  padding-top: 18px;
  span {
    margin-bottom: 15px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  h2 {
    font-size: xx-large;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  input {
    margin-left: 50px;
    margin-right: 50px;
    height: 65px;
    width: 429px;
    margin-bottom: 13px;
    padding-left: 17px;
    box-sizing: border-box;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-size: 27px;
    font-weight: 700;
    line-height: 40px;
    color: #000000;
    width: 80vw;

    @media (max-width: 900px) {
      height: 55px;
      font-size: 22px;
    }
  }
  input::placeholder {
    color: #9f9f9f;
    text-align: center;
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
  background-color: #1877f2;
  border: none;
  margin-bottom: 36px;
  height: 65px;
  width: 429px;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 26px;
  @media (max-width: 900px) {
    height: 55px;
    width: 330px;
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
	
	background-color:#b35f00;
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
