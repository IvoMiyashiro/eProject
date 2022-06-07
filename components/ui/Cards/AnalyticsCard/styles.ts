import styled from 'styled-components';

interface Styles {
  background_color?: string;
  text_color?: string;
}

export const Div = styled.div<Styles>`
  background-color: ${props => props.background_color};
  border-radius: 24px;
  color: ${props => props.text_color};
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  height: 175px;
  justify-content: space-between;
  padding: 1em;
  transition: 0.2s;
  width: 175px;

  :hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

export const P = styled.p`
  font-size: 1.15rem;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
`;

export const Section = styled.section``;
