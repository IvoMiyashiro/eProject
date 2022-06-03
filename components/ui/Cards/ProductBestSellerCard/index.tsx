import Image from 'next/image';
import Link from 'next/link';
import { Div, H3, ImageContainer, ImageWrapper, P, Section } from './styles';

interface Props {
  id: string;
  title: string;
  total_sold: number;
  image_url: string;
}

export const ProductBestSellerCard = ({ id, title, total_sold, image_url }: Props) => {
  return (
    <Div>
      <Link href={`/dashboard/products/${id}`} passHref>
        <ImageContainer>
          <ImageWrapper>
            <Image 
              src={image_url}
              alt={title}
              layout="fill"
              objectFit='contain'
            />
          </ImageWrapper>
        </ImageContainer>
      </Link>
      <Section>
        <Link href={`/dashboard/products/${id}`} passHref>
          <H3>{ title }</H3>
        </Link>
        <P>Total sold: { total_sold }</P>
      </Section>
    </Div>
  );
};
