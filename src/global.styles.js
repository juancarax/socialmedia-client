import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  html {
      box-sizing: border-box;
      font-size: 62.5%;
      @media screen and (max-width: 600px) {
        font-size: 50%;
    }
    @media screen and (max-width: 1000px) {
      font-size: 58%;
  }
}
  }

  body {
      background-color: #F5F5F5;
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      line-height: 1.6;
      padding: 5px;

     
      
      
  }
`;
// box-shadow 0 2rem 6rem rgba(0,0, .3)
export const Container = styled.div``;
