import Image from 'next/image';
import Link from 'next/link';

import { Div, ImageWrapper, H2, Section, P, Wrapper } from './styles';

interface Props {
  id: string;
  image: string;
  title: string;
  brand: string;
  onClick: any;
}

export const ProductSearchCard = ({ image, title, id, brand, onClick }: Props) => {
  return (
    <Link href={`/products/${id}`} passHref>
      <Div onClick={onClick}>
        <Section>
          <ImageWrapper>
            <Image 
              src={image}
              alt={title}
              layout="fill"
              objectFit="contain"
            />
          </ImageWrapper>
        </Section>
        <Wrapper>
          <P>{ brand }</P>
          <H2>{ title }</H2>
        </Wrapper>
      </Div>
    </Link>
  );
};
