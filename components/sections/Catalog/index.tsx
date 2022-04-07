import { useContext } from 'react';
import Link from 'next/link';

import { CatalogContext } from 'context';
import { AsideFilter, Modal } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper, Section, A, P } from './styles';
import { ProductList } from './ProductList';

export const Catalog = () => {

  const { isFilterMenuOpen, toggleFilterMenu } = useContext(CatalogContext);

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
