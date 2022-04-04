import Image from 'next/image';
import Link from 'next/link';

import { IProduct } from 'interfaces';
import { Rating } from '../RatingStars';
import { CartIcon } from 'components/icons';

import { Div, H2, ImageWrapper, Button, Header, InfoWrapper, Price, P, Span, Brand, Section, ImageContainer } from './styles';

interface Props {
  product: IProduct;
}

export const ProductListCard = ({ product }: Props) => {

  return (
    <Div>
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
            <Button>
              <CartIcon
                width="22px"
                height="22px"
                color="white"
              />
            </Button>
          </ImageContainer>
        </ImageWrapper>
      </Link>
      <InfoWrapper>
        <div>
          <Header>
            <Brand>
              {product.brand}
            </Brand>
          </Header>
          <Link href={`/product/${product.id}`} passHref>
            <H2>{product.title}</H2>
          </Link>
          <Section>
            <Rating rating={5} />
          </Section>
        </div>
        <Price>
          <P>${product.discount_price}</P>
          <Span>${product.price}</Span>
        </Price>
      </InfoWrapper>
    </Div>
  );
};
