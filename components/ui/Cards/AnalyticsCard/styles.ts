import styled from 'styled-components';

interface Styles {
  background_color?: string;
  text_color?: string;
}

export const Div = styled.div<Styles>`
  background-color: ${props => props.background_color};
  border-radius: 24px;
  color: ${props => props.text_color};
  height: 175px;
  padding: 1em;
  width: 175px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const P = styled.p`
  font-size: 1.15rem;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
`;

export const Section = styled.section``;
