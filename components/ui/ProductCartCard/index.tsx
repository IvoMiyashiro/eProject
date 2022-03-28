import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProduct } from 'interfaces';
import { Counter } from '../Counter';

import { TrashIcon } from 'components/icons/Trash';
import { Button, Div, H3, ImageContainer, ImageWrapper, P, PriceWrapper, Section, Span, Wrapper } from './styles';

interface Props {
  product: IProduct;
}

export const ProductCartCard = ({ product }: Props) => {

  const [quantity, setQuantity] = useState(1);

  return (
    <Div>
      <Link href={`products/${product.id}`} passHref>
        <ImageWrapper>
          <ImageContainer>
            <Image 
              src={product.imageUrl}
              alt={product.title}
              objectFit="cover"
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
          <Button>
            <TrashIcon width="18px" height="18px" />
          </Button>
        </Section>
        <Section>
          <Counter value={quantity} handleValue={setQuantity} />
          <PriceWrapper>
            <Span>$ {product.price}</Span>
            <P>$ {product.discountPrice * quantity}</P>
          </PriceWrapper>
        </Section>
      </Wrapper>
    </Div>
  );
};
