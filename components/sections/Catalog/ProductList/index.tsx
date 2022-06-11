import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CatalogContext } from 'context';
import { ProductGridCard, ProductListCard, Spinner } from 'components/ui';

import { lightTheme } from 'styles';
import { ProductListAsGrid, ProductListAsList, ScrollSpinnerWrapper, SpinnerWrapper } from './styles';

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
  const isFiltered = false;
  const forInfinieScroll = true;
  
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
              next={() => loadProducts(offset, filters, isFiltered, forInfinieScroll)}
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
