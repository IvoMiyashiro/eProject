import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProductCart } from 'interfaces';
import { CartContext } from 'context';
import { Counter } from '../Counter';
import { TrashIcon } from 'components/icons';

import { Button, Div, H3, ImageContainer, ImageWrapper, P, PriceWrapper, Section, Span, Wrapper } from './styles';

interface Props {
  product: IProductCart;
}

const ProductCartCard = ({ product }: Props) => {

  const { removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  return (
    <Div>
      <Link href={`products/${product.id}`} passHref>
        <ImageWrapper>
          <ImageContainer>
            <Image
              src={product.image_urls[0] as string}
              alt={product.title}
              objectFit="contain"
              layout="fill"
            />
          </ImageContainer>
        </ImageWrapper>
      </Link>
      <Wrapper>
        <Section>
          <Link href={`products/${product.id}`} passHref>
            <H3>{product.title}</H3>
          </Link>
          <Button onClick={() => removeFromCart(product.id)}>
            <TrashIcon width="18px" height="18px" />
          </Button>
        </Section>
        <Section>
          <Counter value={quantity} handleValue={setQuantity} product={product} />
          <PriceWrapper>
            <Span>$ {product.price}</Span>
            <P>$ {product.discount_price * quantity}</P>
          </PriceWrapper>
        </Section>
      </Wrapper>
    </Div>
  );
};

export default React.memo(ProductCartCard);
