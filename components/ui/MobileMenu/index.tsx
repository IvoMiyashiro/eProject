import { useContext } from 'react';

import { UiContext } from 'context';
import { Modal } from '../Modal';
import { Menu } from './Menu';

export const MobileMenu = () => {

  const { isMenuOpen, toggleMenu } = useContext(UiContext);

  return (
    <>
      {
        isMenuOpen
        && (
          <Modal
            justify="flex-end"
            handleCloseChildren={toggleMenu}
          >
          </Modal>
        )
      }
      <Menu isMenuOpen={isMenuOpen}/>
    </>
  );
};
