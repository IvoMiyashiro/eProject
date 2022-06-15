import styled from 'styled-components';

interface Style {
  isSmall?: boolean;
}

export const Div = styled.div<Style>`
  align-items: center;
  background-color: ${props => props.theme.color_product_background};
  border-radius: 8px;
  display: flex;
  height: 125px;
  justify-content: center;
  overflow: hidden;
  padding: 1em;
  position: relative;
  width: 150px;

  :first-child {
    grid-column: 1/span 2;
    grid-row: 1/span 2;
    height: 267px;
    width: 265px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 1em;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
`;
