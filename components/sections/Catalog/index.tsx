import { useContext } from 'react';

import { CatalogContext } from 'context';
import { AsideFilter, ProductGridCard, Spinner } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper, SpinnerWrapper, ProductList } from './styles';

export const Catalog = () => {

  const {productList, isLoading} = useContext(CatalogContext);

  return (
    
    <Div>
      <AsideFilter />
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
              <ProductList>
                {
                  productList.map(product => {
                    return <ProductGridCard key={product.id} product={product} />;
                  })
                }
              </ProductList>
            )
        }
      </Wrapper>
    </Div>

  );
};
