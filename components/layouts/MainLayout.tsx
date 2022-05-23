import Head from 'next/head';
import { ReactChild } from 'react';
import styled from 'styled-components';

import { Navbar, MobileMenu, Cart, Spinner } from 'components/ui';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { lightTheme } from 'styles';

interface Props {
  title: string;
  description: string;
  children: ReactChild;
  needAuth?: boolean;
  onUnauthenticatedPath?: string;
}

export const MainLayout = ({ title, description, children, needAuth = false, onUnauthenticatedPath = '' }: Props) => {

  const router = useRouter();
  const { status } = useSession({
    required: needAuth,
    onUnauthenticated() {
      router.push(`/auth/signin?p=${onUnauthenticatedPath}`);
    },
  });


  return (
    <>
      <Head>  
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />
      <MobileMenu />
      <Cart />
      <Main>
        {
          needAuth
            ? ((status === 'loading')
              ? (
                <SpinnerWrapper>
                  <Spinner color={lightTheme.color_primary_0} size="20px" />
                </SpinnerWrapper>
              )
              : ((status === 'authenticated') && children))
            : children
        }
      </Main>
    </>
  );
};

const Main = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2em;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
