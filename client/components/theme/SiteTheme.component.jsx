import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Navigation from "../navigation/Navigation.component";
import Meta from "./Meta.component";

import FooterTheme from "../footer/Footer.component";

const theme = {
  bodyColor: "rgba(36,45,60,1)",
  darkBlue: "rgba(27, 34, 46,1)",
  darkBlueOpaque: "rgba(27, 34, 46, .6)",
  red: "rgba(255, 73, 60,1)",
  lightGray: "rgba(188,188,188,1)",
  white: " rgb(255, 255, 255)",
  yellow: "rgb(255, 184, 32)",
  thin: "200",
  regular: "300",
  bold: "700",
};

const StyledPage = styled.div`
  color: ${(props) => props.theme.black};
`;

// changed bootstrap .container-fluid from just padding: 0 15px && margin: 0 auto; to add a width of 1366px;
const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    line-height: 1.15;
    box-sizing: border-box;
    font-size: 10px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: ${theme.regular};
    line-height: 40px;
    background-color: ${theme.bodyColor};
    color: ${theme.lightGray};
  }
h1,
h2,
h3,
h4,
h5,
h6 {
    word-break: break-word;
    font-weight: 400;
    line-height: 1;
    font-family: "Raleway", sans-serif;
    color: ${theme.white};
}
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  a:hover {
    text-decoration: none;
    color: ${theme.yellow};
  }
  p {
    font-family: Raleway, sans-serif;
    font-size: 1.6rem;
    line-height: 4rem;
  }
  p:last-child {
    margin-bottom: 0;
}
`;

class SiteTheme extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Navigation />
          <GlobalStyle />
          {this.props.children}
          <FooterTheme />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default SiteTheme;
