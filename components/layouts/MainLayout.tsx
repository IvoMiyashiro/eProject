import Head from 'next/head';
import { ReactChild } from 'react';
import styled from 'styled-components';

import { Navbar, MobileMenu, Cart } from 'components/ui';

interface Props {
  title: string;
  description: string;
  children: ReactChild;
}

export const MainLayout = ({ title, description, children }: Props) => {
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
        { children }
      </Main>
    </>
  );
};

const Main = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2em;
`;
