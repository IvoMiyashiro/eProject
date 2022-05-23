import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 1em;
  padding: 1.5em;
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  cursor: pointer;
  height: 80px;
  min-height: 80px;
  min-width: 80px;
  width: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color_product_background};
`;

export const ImageContainer = styled.div`
  height: 75px;
  min-height: 75px;
  min-width: 75px;
  width: 75px;
  position: relative;
`;

export const Section = styled.section``;

export const H2 = styled.h2`
  color: ${props => props.theme.color_neutral_2};
  font-size: 0.8rem;
  font-weight: 600;
`;

export const H1 = styled.h1`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  :hover {
    text-decoration: underline;
  }
`;
