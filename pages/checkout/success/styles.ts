import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 4em;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  margin-top: -80px;
  max-width: 1240px;
  padding: 0 2em;
  padding-top: 7em;
`;

export const Wrapper = styled.section`
  align-self: center;
`;

export const Section = styled.section`
  align-self: center;
  height: 425px;
`;

export const H1 = styled.h1`
  font-size: 2rem;
`;

export const Underline = styled.span`
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: ${props => props.theme.color_tertiary_0};
  transform: rotate(-0.4deg);
  bottom: -4px;
  z-index: -1;
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const Text = styled.div`
  margin-top: 1.5em;
`;

export const P = styled.p`
  max-width: 450px;
  font-size: 0.9rem;
`;

export const Span = styled.span`
  color: ${props => props.theme.color_primary_0};
`;

export const A = styled.span`
  cursor: pointer;
  color: ${props => props.theme.color_primary_0};
  font-size: 0.9rem;
  text-decoration: underline;
`;

export const LinkWrapper = styled.div`
  margin-top: 3em;
`;
