import { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Navbar } from 'components/ui';

interface Props {
  children: ReactNode;
  title: string;
}

export const CheckoutLayout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>eProject | {title}</title>
      </Head>
  
      <Navbar justLogo={true} />
      <Div>
        <Section>
          { children }
          <Info>
          </Info>
        </Section>
      </Div>
    </>
  );
};

const Div = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const Section = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2em;
  display: grid;
  grid-template-columns: 1fr minmax(400px, 500px);
  gap: 2em;
`;

const Info = styled.div`
  height: 100vh;
  width: 400px;
  background-color: ${prosp => prosp.theme.color_neutral_1};
`;
