import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Div = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
`;

export const Main = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`;

export const H1 = styled.h1``;

export const Section = styled.section`
  align-items: center;
  display: flex;
  gap: 0.5em;
`;

export const P = styled.p``;

export const Wrapper = styled.div`
  position: relative;
`;

export const Underline = styled.span`
  background-color: ${props => props.theme.color_tertiary_0};
  bottom: -4px;
  height: 8px;
  position: absolute;
  transform: rotate(-1.5deg);
  width: 100%;
  z-index: -1;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;
