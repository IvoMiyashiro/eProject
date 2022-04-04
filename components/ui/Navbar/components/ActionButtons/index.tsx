import { useContext } from 'react';
import Link from 'next/link';

import { CartIcon, DarkModeIcon, UserIcon, BarsIcon } from 'components/icons';
import { CartContext, UiContext } from 'context';

import { DefaultTheme } from 'styled-components';
import { Button, CartItemsCounter, LastButton } from './styles';

interface Props {
  handleAppTheme: (theme: DefaultTheme) => void;
}

export const ActionButtons = ({ handleAppTheme }: Props) => {

  const { toggleMenu, toggleCartMenu } = useContext(UiContext);
  const { cart } = useContext(CartContext);

  return (
    <>          
      <Button>
        <DarkModeIcon width="25px" height="25px" />
      </Button>
      <Button onClick={toggleCartMenu}>
        <CartIcon width="25px" height="25px" />
        {  
          cart.length > 0
          && 
          <CartItemsCounter>
            { 
              cart.length > 9
                ? '+9'
                : cart.length
            }
          </CartItemsCounter> 
        }
        

        
      </Button>
      <Link href="/signin" passHref>
        <Button>
          <UserIcon width="23px" height="23px" />
        </Button>
      </Link>
      <LastButton onClick={toggleMenu}>
        <BarsIcon width="35px" height="35px" />
      </LastButton>
    </>
  );
};
