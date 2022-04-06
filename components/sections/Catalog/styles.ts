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

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Section = styled.section`
  display: flex;
  gap: 0.5em;
  margin-top: 5em;
  margin-bottom: 1em;
  align-items: center;
`;

export const A = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color_primary_2};
  font-size: 0.9rem;

  :hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  margin-top: -0.15em;
`;

export const ScrollSpinnerWrapper = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
`;
