import Image from 'next/image';
import Link from 'next/link';

import { IProduct } from 'interfaces';

// import { Rating } from '../Rating';

import { CartIcon } from 'components/icons';
import { Button, Header, Div, ImageWrapper, InfoWrapper, Title, H2, Price, P, Span, Brand } from './styles';

interface Props {
  product: IProduct;
}

export const ProductGridCard = ({ product }: Props) => {

  // const discountPrice = (product.price * (product.discount / 100));

  return (
    <Div>
      <Button>
        <CartIcon
          width="22px"
          height="22px"
          color="white"
        />
      </Button>
      <Link href={`/product/${product.id}`} passHref>
        <ImageWrapper>
          <Image 
            src={product.imageUrl}
            alt={product.title}
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
      </Link>
      <InfoWrapper>
        <Header>
          <Brand>
            {product.brand}
          </Brand>
          {/* <Rating rating={product.rating.rate} /> */}
        </Header>
        <Link href={`/product/${product.id}`} passHref>
          <Title>
            <H2>{product.title}</H2>
          </Title>
        </Link>
        <Price>
          <P>${product.discountPrice}</P>
          <Span>${product.price}</Span>
        </Price>
      </InfoWrapper>
    </Div>
  );
};
