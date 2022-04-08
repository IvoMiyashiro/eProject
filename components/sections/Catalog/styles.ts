import styled from 'styled-components';
import { bp } from 'styles';

export const Div = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  gap: 3em;
  align-items: flex-start;

  @media (max-width: ${bp.desktop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${bp.tablet}) {
    gap: 1em;
  }
`;

export const Wrapper = styled.div`
  :first-child {
    @media (max-width: ${bp.tablet}) {
      display: none;
    }
  }
`;

