import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'sofiapro' ;
    src: url('/sofiapro.ttf') format('truetype');
  }

  ::-webkit-scrollbar{
    background: transparent;
    width: 7px;
    border: 1px solid rgba(22,24,35,0.12);
    border-radius: 9px;
  }

  ::-webkit-scrollbar-thumb{
    background: rgba(22,24,35,0.22);
    border-radius: 9px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden
  }

  html, body {
    font-family: sofiapro;
  }
`;