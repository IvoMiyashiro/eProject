import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${props => props.theme.color_product_background};
  min-width: 80px;
  min-height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  max-width: 80px;
  max-height: 80px;
`;

export const H2 = styled.h2`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const Div = styled.div`
  display: flex;
  gap: 1em;
  cursor: pointer;

  :hover ${H2}{
    text-decoration: underline;
    transition: .3s;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  color: ${props => props.theme.color_neutral_0};
  font-size: 0.7rem;
`;
