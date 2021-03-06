import { useContext, useState } from 'react';
import Link from 'next/link';

import { CartContext, UiContext } from 'context';
import { IProductCart } from 'interfaces';
import { ArrowRightIcon } from 'components/icons';
import { ProductCartCard } from 'components/ui';

import { A, Div, ProductsWrapper, Footer, Ul, Li, P, H3 } from './styles';
import { Spinner } from 'components/ui/Spinner';

interface Props { cart: IProductCart[] }

export const ProductList = ({ cart }: Props) => {

  const { toggleCartMenu } = useContext(UiContext);
  const { orderPrice, orderDiscount, orderTotalPrice,  } = useContext(CartContext);
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    toggleCartMenu();
    setLoading(true);
  };

  return (
    <>
      <Div>
        <ProductsWrapper>
          {              
            cart.map(product => {
              return <ProductCartCard key={product.id} product={product}/>;
            })
          }
        </ProductsWrapper>
        <Footer>
          <Ul>
            <Li>
              <P>Order Price</P>
              <P>$ { orderPrice }</P>
            </Li>
            <Li>
              <P>Discount</P>
              <P>-$ { orderDiscount }</P>
            </Li>
            <Li>
              <H3>Total</H3>
              <H3>$ { orderTotalPrice }</H3>
            </Li>
          </Ul>
          <Link href="/checkout" passHref>
            <A onClick={handleClick}>
              {
                isLoading
                  ? <Spinner />
                  : <> Checkout <ArrowRightIcon width="22px" height="22px" /> </>
              }
              
            </A>
          </Link>
        </Footer>
      </Div>
    </>
  );
};
