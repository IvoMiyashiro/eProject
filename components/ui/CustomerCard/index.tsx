import Image from 'next/image';
import { Wrapper, ImageWrapper, Section, H2, Role, P } from './styles';

interface Props {
  image: string;
  name: string;
  role: string;
  email: string;
}

export const CustomerCard = ({ image, name, role, email }: Props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={!!image ? image : '/images/profile_image.png'}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <Section>
        <H2>{ name }</H2>
        <Role>{ role }</Role>
        <P>{ email }</P>
      </Section>
    </Wrapper>
  );
};
