import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 3em;
`;

export const Wrapper = styled.div``;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_product_background};
  display: flex;
  height: 400px;
  justify-content: center;
  width: 475px;
  border-radius: 12px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Span = styled.span`
  font-size: 0.9rem;
  color: ${prosp => prosp.theme.color_neutral_0};
`;

export const H1 = styled.h1`
  color: ${props => props.theme.color_ui_text_main};
`;

export const H2 = styled.h2`
  font-size: 2rem;
  font-family: 'Inter';
`;

export const InStock = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.color_ui_ok_0};
`;

export const OutOfStock = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.color_ui_danger};
`;

export const PriceWrapper = styled.div`
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75em;
`;

export const Discount = styled.p`
  text-decoration: line-through;
  color: ${props => props.theme.color_neutral_2};
`;
