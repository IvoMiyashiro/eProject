import { SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Div, ImageWrapper, H2, Section } from './styles';

interface Props {
  id: string;
  image: string;
  title: string;
  onClick: any;
}

export const ProductSearchCard = ({ image, title, id, onClick }: Props) => {
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
        <H2>{ title }</H2>
      </Div>
    </Link>
  );
};
