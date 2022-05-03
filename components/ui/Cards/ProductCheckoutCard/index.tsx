import Image from 'next/image';
import Link from 'next/link';
import { Div, ImageWrapper, Wrapper, H2, Section, P, ImageContainer, Span } from './styles';

interface Props {
  id: string;
  imageUrl: string;
  title: string;
  quantity: number;
  price: number;
}

export const ProductCheckoutCard = ({ id, imageUrl, title, quantity, price }: Props) => {
  return (
    <Div>
      <Link href={`/products/${id}`} passHref>
        <ImageWrapper>
          <ImageContainer>
            <Image 
              src={imageUrl}
              alt={title}
              objectFit="contain"
              layout='fill'
            />
          </ImageContainer>
        </ImageWrapper>
      </Link>
      <Wrapper>
        <Link href={`/products/${id}`} passHref>
          <H2>{title}</H2>
        </Link>
        <Section>
          <P>Quantity: <Span>{quantity}</Span></P>
        </Section>
        <Section>
          <P>Price: <Span>${price}</Span></P>
        </Section>
      </Wrapper>
    </Div>
  );
};
