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
