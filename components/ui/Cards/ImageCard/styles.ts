import styled from 'styled-components';

interface Style {
  isSmall?: boolean;
}

export const Div = styled.div<Style>`
  width: ${props => props.isSmall ? '150px' : '200px'};
  height: ${props => props.isSmall ? '125px' : '267px'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color_product_background};
  border-radius: 8px;
  padding: 1em;

  :hover {
    
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
