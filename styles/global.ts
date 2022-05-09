import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-ExtraBold.ttf');
    font-style: normal;
    font-weight: 800;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Bold.ttf');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.ttf');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Lexend';
    src: url('/fonts/Lexend-ExtraBold.ttf');
    font-style: normal;
    font-weight: 800;
  }
  @font-face {
    font-family: 'Lexend';
      src: url('/fonts/Lexend-Bold.ttf');
    font-style: normal;
    font-weight: 600;
  }
  @font-face {
    font-family: 'Lexend';
    src: url('/fonts/Lexend-Regular.ttf');
    font-style: normal;
    font-weight: 400;
  }

  ul {
    list-style: outside disc;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 20px;
   }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  } 

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`;
