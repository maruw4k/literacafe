import { createGlobalStyle } from 'styled-components';

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
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
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
    max-width: 1200px; 
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default GlobalStyle;
