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

export const Wrapper = styled.div`

  :first-child {
    @media (max-width: ${bp.tablet}) {
      display: none;
    }
  }

  :last-child {
    overflow-x: auto;
    padding: 0 2em;
    padding-bottom: 2em;
  }
`;

