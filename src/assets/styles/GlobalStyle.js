import { createGlobalStyle } from 'styled-components';
import { theme } from 'assets/styles/theme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    font-family: ${theme.font.family.main};
    font-weight: 300;
    line-height: 1.5;
  }
  
  a {
  color: black;
  text-decoration: none;
  }
  
  a:hover {
  text-decoration: underline;
  }
  
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px; 
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
  }
`;

export default GlobalStyle;
