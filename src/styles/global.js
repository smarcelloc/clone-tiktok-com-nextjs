import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'sofiapro' ;
    src: url('/sofiapro.ttf') format('truetype');
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  html, body {
    font-family: sofiapro;
  }

  ::-webkit-scrollbar{
      background: #fff;
      width: 5px;
      border: 1px solid rgba(22, 24, 35, 0.12);
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb{
      background:rgba(22, 24, 35, 0.35);
      border-radius: 10px;
    }
`;

export default GlobalStyle;