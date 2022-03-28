import { MouseEvent, useRef } from 'react';

import styled from 'styled-components';
import { bp } from 'styles';

interface Props {
  align?: string;
  children?: any;
  justify?: string;
  isMobile?: boolean;
  handleCloseChildren: () => void;
}

export const Modal = ({
  children,
  align = 'center',
  justify = 'center',
  isMobile = false,
  handleCloseChildren
}: Props) => {

  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      modalRef.current.style.width = '0px';

      if (!!handleCloseChildren) {
        handleCloseChildren();
      }
    }
  };

  const handleCursor = (e: MouseEvent<HTMLDivElement>) => {

    if (modalRef.current === null) return;

    if (e.target === modalRef.current) {
      modalRef.current.style.cursor = 'pointer';
      return;
    }

    modalRef.current.style.cursor = 'default';
  };

  return (
    <Div 
      align={align}
      justify={justify}
      isMobile={isMobile}
      onClick={handleCloseModal}
      onMouseOver={handleCursor}
      ref={modalRef}
    >
      { children }
    </Div>
  );
};

interface Styles {
  align: string;
  justify: string;
  isMobile: boolean;
}

const Div = styled.div<Styles>`
  align-items: ${props => props.align};
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100vh;
  justify-content: ${props => props.justify};
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;

  @media (min-width: ${bp.tablet}) {
    display: ${props => props.isMobile ? 'flex' : 'none'};
  }
`;
