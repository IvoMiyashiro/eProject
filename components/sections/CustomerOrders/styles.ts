import styled from 'styled-components';
import { bp } from 'styles';

export const Div = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  gap: 1em;
  align-items: flex-start;

  @media (max-width: ${bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 1em;
  }
`;

export const P = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.color_neutral_2};
`;

export const Section = styled.div`
  overflow-x: auto;
  padding: 0 2em;
  padding-bottom: 2em;
`; 

export const TextWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
