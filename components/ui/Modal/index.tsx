import { MouseEvent, useRef } from 'react';
import { Div } from './styles';

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


