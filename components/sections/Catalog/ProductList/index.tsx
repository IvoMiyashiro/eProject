import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CatalogContext } from 'context';
import { ProductGridCard, ProductListCard, Spinner } from 'components/ui';

import { ProductListAsGrid, ProductListAsList, ScrollSpinnerWrapper, SpinnerWrapper } from './styles';

export const ProductList = () => {

  const { 
    display,
    filters,
    haveMoreProducts,
    isFilterApplied,
    isLoading,
    productList,

    // Methods
    applyCatalogFilter,
    loadProducts,
  } = useContext(CatalogContext);
  const offset = productList.reduce(() => (productList.length), 0);
  
  return (
    <>
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
              next={isFilterApplied ? () => applyCatalogFilter(offset, filters) : () => loadProducts(offset)}
              hasMore={productList.length < 12 ? false : haveMoreProducts }
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
    </>
  );
};
