import { ReactChild } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  children: ReactChild;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  handleOpen: (value: boolean) => void;
}

export const TabMenu = ({ isOpen, children, top, left, right, bottom, handleOpen }: Props) => {
  return (
    <>
      {
        isOpen
        &&
        <>
          <Wrapper onClick={() => handleOpen(false)}/>
          <Menu top={top} left={left} right={right} bottom={bottom}>{ children }</Menu>
        </>
      }
    </>
  );
};

interface Styles {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  left: 0;
  top: 0;
  height: 100vh;
`;
  
const Menu = styled.menu<Styles>`
  background-color: ${props => props.theme.color_ui_background};
  border-radius: 4px;
  bottom: ${props => props.bottom !== undefined ? props.bottom : ''};
  box-shadow:
    0px 0px 1.6px rgba(0, 0, 0, 0.011),
    0px 0px 3.8px rgba(0, 0, 0, 0.016),
    0px 0px 7.1px rgba(0, 0, 0, 0.02),
    0px 0px 12.7px rgba(0, 0, 0, 0.024),
    0px 0px 23.8px rgba(0, 0, 0, 0.029),
    0px 0px 57px rgba(0, 0, 0, 0.04);
  left: ${props => props.left !== undefined ? props.left : ''};
  margin: 0;
  padding: 0.5em 0;
  position: absolute;
  right: ${props => props.right !== undefined ? props.right : ''};
  text-align: left;
  top: ${props => props.top !== undefined ? props.top : ''};
  z-index: 10;
`;
