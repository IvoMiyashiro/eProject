import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { AuthContext } from 'context';

import { GridIcon, LogoutIcon, ReviewIcon, SettingsIcon, TagIcon, BookmarkIcon } from 'components/icons';
import { Logo } from '../Logo';

import { lightTheme } from 'styles';
import { Aside, Nav, Ul, Li, Span, Header, A, Footer, Button } from './styles';

export const DashboardMenu = () => {

  const { signout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Aside>
      <Nav>
        <Header>
          <Logo logoColor={lightTheme.color_primary_0} withText={false} isLink />
        </Header>
        <Ul>
          <Li>
            <Link href="/dashboard" passHref>
              <A isActive={router.pathname === '/dashboard'}>
                <GridIcon width="24px" height="24px" />
                <Span>Dashboard</Span>
              </A>
            </Link>
          </Li>
          <Li>
            <Link href="/dashboard/products" passHref>
              <A isActive={router.pathname === '/dashboard/products'}>
                <TagIcon width="24px" height="24px" />
                <Span>Products</Span>
              </A>
            </Link>
          </Li>
          <Li>
            <Link href="/dashboard/orders" passHref>
              <A isActive={router.pathname === '/dashboard/orders'}>
                <BookmarkIcon width="24px" height="24px" />
                <Span>Orders</Span>
              </A>
            </Link>
          </Li>
          <Li>
            <Link href="/dashboard/reviews" passHref>
              <A isActive={router.pathname === '/dashboard/reviews'}>
                <ReviewIcon width="24px" height="24px" />
                <Span>Reviews</Span>
              </A>
            </Link>
          </Li>
          <Li>
            <Link href="/dashboard/settings" passHref>
              <A isActive={router.pathname === '/dashboard/settings'}>
                <SettingsIcon width="24px" height="24px" />
                <Span>Settings</Span>
              </A>
            </Link>
          </Li>
        </Ul>
        <Footer>
          <Button onClick={signout}>
            <LogoutIcon width="24px" height="24px"/>
            <Span>Logout</Span>
          </Button>
        </Footer>
      </Nav>
    </Aside>
  );
};
