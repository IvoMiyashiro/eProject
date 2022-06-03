import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

import { Div, H3, ImageContainer, ImageWrapper, P, Section } from '../ProductBestSellerCard/styles';

interface Props {
  id: string;
  name: string;
  total_purchases: number | undefined;
  profile_image: string;
  created_at: Date;
}

export const BestCustomerCard = ({ id, name, total_purchases, profile_image, created_at }: Props) => {

  const USER_PROFILE_IMAGE = !!profile_image ? profile_image : '/images/profile_image.png';

  return (
    <Div>
      <Link href={`/dashboard/products/${id}`} passHref>
        <ImageContainer>
          <ImageWrapper>
            <Image 
              src={USER_PROFILE_IMAGE}
              alt={name}
              layout="fill"
              objectFit='cover'
            />
          </ImageWrapper>
        </ImageContainer>
      </Link>
      <Section>
        <Link href={`/dashboard/products/${id}`} passHref>
          <H3>{ name }</H3>
        </Link>
        <P>Total purchases: { total_purchases }</P>
        <P>Client since: { dayjs(created_at).format('MMM D, h:mm A') }</P>
      </Section>
    </Div>
  );
};
