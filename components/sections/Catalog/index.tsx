import { useContext } from 'react';

import { CatalogContext } from 'context';
import { AsideFilter, MapLinks, Modal } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper } from './styles';
import { ProductList } from './ProductList';
import { useRouter } from 'next/router';

export const Catalog = () => {

  const { isFilterMenuOpen, toggleFilterMenu } = useContext(CatalogContext);
  const router = useRouter();
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

  const searchLinks = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Products',
      link: '/products'
    },
    {
      name: `Search: ${router.query.search}`,
      link: `/products?search=${router.query.search}`
    }
  ];

  return (
    <>
      <MapLinks links={router.query.search !== undefined ? searchLinks : links}/>
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
