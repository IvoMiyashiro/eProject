import { useContext } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import { AuthContext, CutomerReviewsProvider } from 'context';
import { MainLayout } from 'components/layouts';
import { CustomerProfile } from 'components/sections';

const CustomerReviewsPage: NextPage = () => {

  const { customer } = useContext(AuthContext);
  const pageTitle = customer?.name === undefined ? 'Loading...' : customer.name;

  return (
    <>
      <CutomerReviewsProvider>
        <MainLayout
          title={`eProject | ${pageTitle}`} 
          description=""
          needAuth
          onUnauthenticatedPath="/profile"
        >
          <Div>
            <Section>
              <Wrapper>
                <H1>My Profile</H1>
                <Underline />
              </Wrapper>
            </Section>
            <CustomerProfile />
          </Div>
        </MainLayout>
      </CutomerReviewsProvider>
    </>
  );
};

export default CustomerReviewsPage;

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
