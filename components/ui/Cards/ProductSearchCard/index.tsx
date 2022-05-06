import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from 'interfaces';

import { Div, ImageWrapper, H2, Section, P, Wrapper } from './styles';

interface Props {
  data: IProduct
}

export const ProductSearchCard = ({ data }: Props) => {

  const { image_urls, title, id, brand } = data;

  return (
    <Link href={`/products/${id}`} passHref>
      <Div>
        <Section>
          <ImageWrapper>
            <Image 
              src={image_urls[0]}
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
