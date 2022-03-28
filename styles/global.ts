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
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
