import styled from 'styled-components';
import { bp } from 'styles';

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.25em;
  margin-top: 0.5em;
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

  @media (max-width: ${bp.tablet}) {
    font-size: 1.5rem;
  }
`;

export const Span = styled.span`
  color: ${props => props.theme.color_neutral_2};
  font-family: 'Inter';
  font-size: 0.9rem;
  text-decoration: line-through;
  
`;

export const Brand = styled.p`
  color: ${props => props.theme.color_neutral_2};
  font-size: 0.8rem;
  
`;

const commun = `
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  height: 35px;
  justify-content: center;
  opacity: 0;
  padding: 0.25em 0.5em;
  position: absolute;
  right: 14px;
  top: 14px;
  transition: opacity 0.2s;
  width: 35px;
  z-index: 1;
`;

export const AddToCartButton = styled.button`
  ${commun};
  background-color: ${props => props.theme.color_primary_0};
`;

export const IsInCartButton = styled.button`
  ${commun};
  background-color: ${props => props.theme.color_ui_ok_0};
  `;

export const RemoveFromCartButton = styled.button`
  ${commun};
  background-color: ${props => props.theme.color_ui_danger};
`;


export const ImageWrapper = styled.section`
  align-items: center;
  background-color: ${props => props.theme.color_product_background};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 175px;
  width: 175px;
  flex-shrink: 0;
  position: relative;

  @media (max-width: ${bp.tablet}) {
    width: 140px;
    height: 140px;
  }
`;

export const ImageContainer = styled.section`
  height: 160px;
  position: relative;
  transition: transform 0.2s;
  width: 160px;
  
  @media (max-width: ${bp.tablet}) {
    width: 120px;
    height: 120px;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 1em;
  position: relative;

  :hover ${ImageWrapper} {
    transform: scale(0.97);
    transition: transform 0.2s;
  }
  
  :hover ${AddToCartButton} {
    opacity: 1;
    transition: opacity 0.2s;
  }

  :hover ${IsInCartButton} {
    opacity: 1;
    transition: opacity 0.2s;
  }

  :hover ${RemoveFromCartButton} {
    opacity: 1;
    transition: opacity 0.2s;
  }
`;

export const H2 = styled.h2`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  cursor: pointer;
  display: -webkit-box;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4em;
  overflow: hidden;

  @media (max-width: ${bp.tablet}) {
    font-size: 1rem;
  }
`;

export const Section = styled.section`
  margin-top: 0.5em;
`;
