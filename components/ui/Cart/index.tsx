import { useContext } from 'react';

import { UiContext } from 'context';
import { Modal } from '../Modal';
import { AsideCartMenu } from './AsideCartMenu';

export const Cart = () => {

  const { isCartOpen, toggleCartMenu } = useContext(UiContext);
  
  return (
    <>
      {
        isCartOpen
        && (
          <Modal
            justify="flex-end"
            handleCloseChildren={toggleCartMenu}
            isMobile={false}
          >
          </Modal>
        )
      }
      <AsideCartMenu isMenuOpen={isCartOpen} />
    </>
  );
};
