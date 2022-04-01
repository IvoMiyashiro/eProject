import type { NextPage } from 'next';

import { CatalogProvider } from 'context';
import { MainLayout } from 'components/layouts';
import { Catalog } from 'components/sections';

import styled from 'styled-components';

const ProductsPage: NextPage = () => {

  return (
    <CatalogProvider>
      <MainLayout title="eProject | Our Products" description="">
        <Div>
          <Section>
            <Wrapper>
              <H1>Our Products</H1>
              <Underline />
            </Wrapper>
          </Section>
          <Catalog />
        </Div>
      </MainLayout>
    </CatalogProvider>
  );
};

export default ProductsPage;

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
  width: 100%;
  height: 10px;
  background-color: ${props => props.theme.color_tertiary_0};
  position: absolute;
  bottom: -5px;
  transform: rotate(-1deg);
`;

const Wrapper = styled.div`
  position: relative;
  display: inline;
`;
