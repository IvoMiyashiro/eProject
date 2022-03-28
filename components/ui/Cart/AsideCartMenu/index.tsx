import Link from 'next/link';

import { IProduct } from 'interfaces';
import { ProductCartCard } from 'components/ui';

import { ArrowRightIcon } from 'components/icons';
import { A, Aside, Button, EmptyCart, Footer, H2, H3, Header, P, ProductsWrapper, Section, Span } from './styles';
import { useContext } from 'react';
import { UiContext } from 'context';

interface Props {
  isMenuOpen: boolean;
}

export const AsideCartMenu = ({ isMenuOpen }: Props) => {

  const { toggleCartMenu } = useContext(UiContext);

  const productCartList: IProduct[] = [
    // {
    //   id: '1',
    //   title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
    //   category: 'Video Cards',
    //   quantity: 1,
    //   price: 1000,
    //   discountPrice: 500,
    //   imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    // },
    // {
    //   id: '2',
    //   title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
    //   category: 'Video Cards',
    //   quantity: 1,
    //   price: 1000,
    //   discountPrice: 500,
    //   imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    // },
  ];

  return (
    <Aside isOpen={ isMenuOpen }>
      <Header>
        <H2>Shopping Cart</H2>
        <Span onClick={toggleCartMenu}>&times;</Span>
      </Header>
      {
        productCartList.length !== 0
          ? (
            <Section>
              <ProductsWrapper>
                {              
                  productCartList.map(product => {
                    return <ProductCartCard key={product.id} product={product}/>;
                  })
                }
              </ProductsWrapper>
              <Footer>
                <Link href="/checkout" passHref>
                  <A>
                    Checkout
                    <ArrowRightIcon width="22px" height="22px" />
                  </A>
                </Link>
              </Footer>
            </Section>
          )
          : (
            <EmptyCart>
              <H3>Your cart is empty!</H3>
              <P>We have the best products and sales for you to enjoy.</P>
              <Button onClick={toggleCartMenu}>
                  Explore
                <ArrowRightIcon width="18px" height="16px" />
              </Button>
            </EmptyCart>
          )
      }
    </Aside>
  );
};
