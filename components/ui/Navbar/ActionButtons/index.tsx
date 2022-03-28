import { useContext } from 'react';
import Link from 'next/link';

import { CartIcon, DarkModeIcon, UserIcon, BarsIcon } from 'components/icons';
import { UiContext } from 'context';

import { DefaultTheme } from 'styled-components';
import { Button, LastButton } from './styles';

interface Props {
  handleAppTheme: (theme: DefaultTheme) => void;
}

export const ActionButtons = ({ handleAppTheme }: Props) => {

  const { toggleMenu, toggleCartMenu } = useContext(UiContext);

  return (
    <>          
      <Button>
        <DarkModeIcon width="25px" height="25px" />
      </Button>
      <Button onClick={toggleCartMenu}>
        <CartIcon width="23px" height="23px" />
      </Button>
      <Link href="/signin" passHref>
        <Button>
          <UserIcon width="23px" height="23px" />
        </Button>
      </Link>
      <LastButton onClick={toggleMenu}>
        <BarsIcon width="30px" height="30px" />
      </LastButton>
    </>
  );
};
