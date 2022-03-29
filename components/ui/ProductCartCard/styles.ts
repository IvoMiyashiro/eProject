import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 1em;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_product_background};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 90px;
  justify-content: center;
  min-width: 90px;
`;

export const ImageContainer = styled.div`
  height: 75px;
  position: relative;
  width: 75px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  gap: 1em;
  justify-content: space-between;
`;

export const H3 = styled.h3`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${props => props.theme.color_ui_text_main};
  cursor: pointer;
  display: -webkit-box;
  font-size: 0.8rem;
  max-width: 200px;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.color_ui_text_main};
  padding: 0;
`;

export const PriceWrapper = styled.div`
  
`;

export const Span = styled.span`
  color: ${props => props.theme.color_neutral_0};
  font-family: 'Inter';
  font-size: 0.9rem;
  text-decoration: line-through;
`;

export const P = styled.p`
  color: ${props => props.theme.color_primary_0};
  font-family: 'Inter';
  font-size: 1.25rem;
  font-weight: 600;
`;
