import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  .nav {
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding: 10px;
  }
  .link {
    border: 1px solid #5f9ea0;
    padding: 10px;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
  }
  .button {
    color: blue;
    text-shadow: 1px 1px 1px darkblue;
    cursor: pointer;
    border: 1px solid #5f9ea0;
    padding: 5px;
    max-width: 200px;
  }
`;

export default GlobalStyle;
