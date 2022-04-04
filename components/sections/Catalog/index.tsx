import { useContext } from 'react';
import Link from 'next/link';

import { CatalogContext } from 'context';
import { AsideFilter, Modal, ProductGridCard, ProductListCard, Spinner } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper, SpinnerWrapper, ProductListAsGrid, ProductListAsList, Section, A, P } from './styles';

export const Catalog = () => {

  const { productList, isLoading, display, isFilterMenuOpen, toggleFilterMenu } = useContext(CatalogContext);

  return (
    <>
      <Section>
        <Link href="/" passHref>
          <A>Home</A>
        </Link>
        <P> &#62; </P>
        <Link href="/products" passHref>
          <A>Products</A>
        </Link>
      </Section>
      <Div>
        <Wrapper>
          <AsideFilter />
        </Wrapper>
        <Wrapper>
          <Header />
          {
            isLoading
              ? (
                <SpinnerWrapper>
                  <Spinner />
                </SpinnerWrapper>
              )
              : display === 'grid'
                ? (
                  <ProductListAsGrid>
                    {
                      productList.map(product => {
                        return <ProductGridCard key={product.id} product={product} />;
                      })
                    }
                  </ProductListAsGrid>
                )
                : (
                  <ProductListAsList>
                    {
                      productList.map(product => {
                        return <ProductListCard key={product.id} product={product} />;
                      })
                    }
                  </ProductListAsList>
                )
          }
        </Wrapper>
        {
          isFilterMenuOpen
        &&
        <Modal
          handleCloseChildren={toggleFilterMenu}
          isMobile={true}
        >
          <AsideFilter />
        </Modal>
        }
      </Div>
    </>
  );
};
