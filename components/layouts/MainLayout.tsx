import Head from 'next/head';
import { ReactChild } from 'react';
import styled from 'styled-components';

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
