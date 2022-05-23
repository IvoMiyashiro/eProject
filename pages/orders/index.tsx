import type { NextPage } from 'next';
import styled from 'styled-components';

import { MainLayout } from 'components/layouts';
import { CustomerOrders } from 'components/sections';

const CustomerOrdersPage: NextPage = () => {
  return (
    <>
      <MainLayout
        title="eProject | My Orders"
        description=""
        needAuth
        onUnauthenticatedPath='/orders'
      >
        <Div>
          <Section>
            <Wrapper>
              <H1>My Orders</H1>
              <Underline />
            </Wrapper>
          </Section>
          <CustomerOrders />
        </Div>
      </MainLayout>
    </>
  );
};

export default CustomerOrdersPage;

const Div = styled.div`
  padding: 7em 0;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
`;
  
const H1 = styled.h1`
  font-size: 2.5rem;
`;
  
const Underline = styled.span`
  background-color: ${props => props.theme.color_tertiary_0};
  bottom: -5px;
  height: 10px;
  position: absolute;
  transform: rotate(-1deg);
  width: 100%;
`;

const Wrapper = styled.div`
  display: inline;
  margin-bottom: 2.5em;
  position: relative;
`;
