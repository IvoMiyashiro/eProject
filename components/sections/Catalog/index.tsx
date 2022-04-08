import { useContext } from 'react';

import { CatalogContext } from 'context';
import { AsideFilter, MapLinks, Modal } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper } from './styles';
import { ProductList } from './ProductList';

export const Catalog = () => {

  const { isFilterMenuOpen, toggleFilterMenu } = useContext(CatalogContext);
  const links = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Products',
      link: '/products'
    }
  ];

  return (
    <>
      <MapLinks links={links}/>
      <Div>
        <Wrapper>
          <AsideFilter />
        </Wrapper>
        <Wrapper>
          <Header />
          <ProductList />
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
