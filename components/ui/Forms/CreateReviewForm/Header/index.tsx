import Link from 'next/link';
import Image from 'next/image';

import { Div, ImageWrapper, Section, H2, H1, ImageContainer } from './styles';

interface Props {
  product_id: string;
  image: string;
  title: string;
  brand: string;
}

export const Header = ({ product_id, image, title, brand }: Props) => {
  return (
    <Link href={`/products/${product_id}`} passHref>
      <Div>
        <ImageWrapper>
          <ImageContainer>
            <Image
              src={image}
              alt={title}
              objectFit="contain"
              layout="fill"
            />
          </ImageContainer>
        </ImageWrapper>
        <Section>
          <H2>{brand}</H2>
          <H1>{title}</H1>
        </Section>
      </Div>
    </Link>
  );
};
