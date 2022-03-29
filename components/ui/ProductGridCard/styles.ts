import styled from 'styled-components';

export const ImageWrapper = styled.section`
  background-color: ${props => props.theme.color_product_background};
  border-radius: 16px;
  cursor: pointer;
  height: 250px;
  position: relative;
  transition: transform 0.2s;
  width: 250px;
`;

export const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin-top: 0.5em;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.color_primary_0 + 'D9'};
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  padding: 0.5em;
  position: absolute;
  right: 14px;
  top: 14px;
  transition: opacity 0.2s;
  z-index: 1;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  height: 360px;
  position: relative;
  width: 250px;
  :hover ${ImageWrapper} {
    transform: scale(0.97);
    transition: transform 0.2s;
  }
  :hover ${Button} {
    opacity: 1;
    transition: opacity 0.2s;
  }
`;

export const Title = styled.div``;

export const Brand = styled.p`
  color: ${props => props.theme.color_neutral_2};
  font-size: 0.8rem;
`;

export const H2 = styled.h3`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  cursor: pointer;
  display: -webkit-box;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4em;
  max-width: 250px;
  overflow: hidden;
`;

export const Price = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5em;
`;

export const P = styled.p`
  color: ${props => props.theme.color_primary_0};
  font-family: 'Inter';
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Span = styled.span`
  color: ${props => props.theme.color_neutral_2};
  font-family: 'Inter';
  font-size: 0.9rem;
  text-decoration: line-through;
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
`;
