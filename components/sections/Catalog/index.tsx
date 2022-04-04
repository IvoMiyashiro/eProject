import { useContext } from 'react';

import { CatalogContext } from 'context';
import { AsideFilter, Modal, ProductGridCard, ProductListCard, Spinner } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper, SpinnerWrapper, ProductListAsGrid, ProductListAsList } from './styles';

export const Catalog = () => {

  const { productList, isLoading, display, isFilterMenuOpen, toggleFilterMenu } = useContext(CatalogContext);

  return (
    
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


  );
};
