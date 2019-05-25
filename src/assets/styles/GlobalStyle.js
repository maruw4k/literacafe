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
    overflow-x: hidden;
  }
  
  a {
  color: white;
  text-decoration: none;
  }
  
  a:hover {
  text-decoration: underline;
  }
  
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px; 
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default GlobalStyle;
