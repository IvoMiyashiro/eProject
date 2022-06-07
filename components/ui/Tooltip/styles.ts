import styled from 'styled-components';

interface Styles {
  bgColor?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const Span = styled.span`
  background-color: transparent;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const Wrapper = styled.div<Styles>`
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  position: absolute;
  right: ${props => props.right};
  top: ${props => props.top};
  z-index: 1;
`;

export const Div = styled.div<Styles>`
  background-color: ${props => props.bgColor};
  border-radius: 6px;
  color: #fff;
  margin: 40px;
  padding: 20px;
  position: relative;

  :after {
    content: " ";
    border-bottom: 10px solid ${props => props.bgColor};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: none;
    position: absolute;
    right: 30px;
    top: -10px;
  }
`;
