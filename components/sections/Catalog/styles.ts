import styled from 'styled-components';
import { bp } from 'styles';

export const Div = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  gap: 3em;
  margin-top: 5em;
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

export const ProductListAsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 2.5em;

  @media (max-width: ${bp.desktop}) {
    justify-content: center;
  }

  @media (max-width: ${bp.tablet}) {
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 2em 1.1em;
  }
`;

export const ProductListAsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
