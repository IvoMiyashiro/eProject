import { useContext } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CatalogContext } from 'context';
import { AsideFilter, Modal, ProductGridCard, ProductListCard, Spinner } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper, SpinnerWrapper, ProductListAsGrid, ProductListAsList, Section, A, P, ScrollSpinnerWrapper } from './styles';

export const Catalog = () => {

  const { 
    productList,
    isLoading,
    display,
    isFilterMenuOpen,
    haveMoreProducts,
    toggleFilterMenu,
    loadProducts
  } = useContext(CatalogContext);
  const offset = productList.reduce(() => (productList.length), 0);

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
              : (
                <InfiniteScroll
                  dataLength={productList.length}
                  next={() => loadProducts(offset)}
                  hasMore={haveMoreProducts}
                  loader={<ScrollSpinnerWrapper><Spinner /></ScrollSpinnerWrapper>}
                >
                  {
                    display === 'grid'
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
                </InfiniteScroll>
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
