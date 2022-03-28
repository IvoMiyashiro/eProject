import { useContext } from 'react';

import { UiContext } from 'context';
import { Modal } from '../Modal';
import { AsideMobileMenu } from './AsideMobileMenu';

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
            isMobile={true}
          >
          </Modal>
        )
      }
      <AsideMobileMenu isMenuOpen={isMenuOpen}/>
    </>
  );
};
