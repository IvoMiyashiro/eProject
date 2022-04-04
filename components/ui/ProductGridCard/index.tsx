import Image from 'next/image';
import Link from 'next/link';

import { IProduct } from 'interfaces';
import { CartIcon } from 'components/icons';
import { Rating } from '../RatingStars';

import { Button, Header, Div, ImageWrapper, InfoWrapper, Title, H2, Price, P, Span, Brand, ImageContainer } from './styles';

interface Props {
  product: IProduct;
}

export const ProductGridCard = ({ product }: Props) => {

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
          <ImageContainer>
            <Image 
              src={product.image_urls as string}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={product.image_urls as string}
            />
          </ImageContainer>
        </ImageWrapper>
      </Link>
      <InfoWrapper>
        <Header>
          <Brand>
            {product.brand}
          </Brand>
          <Rating rating={5} />
        </Header>
        <Link href={`/product/${product.id}`} passHref>
          <Title>
            <H2>{product.title}</H2>
          </Title>
        </Link>
        <Price>
          <P>${product.discount_price}</P>
          <Span>${product.price}</Span>
        </Price>
      </InfoWrapper>
    </Div>
  );
};
