import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CatalogContext } from 'context';
import { ProductGridCard, ProductListCard, Spinner } from 'components/ui';

import { ProductListAsGrid, ProductListAsList, ScrollSpinnerWrapper, SpinnerWrapper } from './styles';
import { lightTheme } from 'styles';

export const ProductList = () => {

  const { 
    display,
    filters,
    haveMoreProducts,
    isProductLoading,
    productList,
    loadProducts,
  } = useContext(CatalogContext);
  const offset = productList.reduce(() => (productList.length), 0);

  return (
    <>
      {
        isProductLoading
          ? (
            <SpinnerWrapper>
              <Spinner color={lightTheme.color_primary_2} />
            </SpinnerWrapper>
          )
          : (
            <InfiniteScroll
              dataLength={productList.length}
              next={() => loadProducts(offset, filters, false)}
              hasMore={productList.length < 12 ? false : haveMoreProducts}
              loader={<ScrollSpinnerWrapper><Spinner color={lightTheme.color_primary_2} /></ScrollSpinnerWrapper>}
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
