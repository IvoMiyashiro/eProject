import { bp } from 'styles';
import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ScrollSpinnerWrapper = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
`;

export const ProductListAsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 2.5em;
  padding-bottom: 2em;

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
