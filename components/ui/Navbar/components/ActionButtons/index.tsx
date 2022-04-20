import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DefaultTheme } from 'styled-components';

import { AuthContext, CartContext, UiContext } from 'context';

import { CartIcon, DarkModeIcon, UserIcon, BarsIcon } from 'components/icons';
import { UserDropdown } from '../UserDropdown';

import { Button, CartItemsCounter, LastButton, Div, ImageWrapper } from './styles';

interface Props {
  handleAppTheme: (theme: DefaultTheme) => void;
}

export const ActionButtons = ({ handleAppTheme }: Props) => {

  const { toggleMenu, toggleCartMenu } = useContext(UiContext);
  const { isLoggedIn, customer } = useContext(AuthContext);
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
      {
        isLoggedIn
          ? (
            <Div>
              <ImageWrapper>
                <Image
                  src={customer!.profile_image || '/images/profile_image.png'}
                  alt={customer!.name}
                  layout="fill"
                  objectFit="contain"
                />
              </ImageWrapper>
              <UserDropdown image={customer!.profile_image} name={customer!.name} email={customer!.email} role={customer!.role}/>
            </Div>
          )
          : (
            <Link href="/auth/signin" passHref>
              <Button>
                <UserIcon width="23px" height="23px" />
              </Button>
            </Link>
          )
      }
      <LastButton onClick={toggleMenu}>
        <BarsIcon width="35px" height="35px" />
      </LastButton>
    </>
  );
};
