import Image from 'next/image';
import { Div, ImageWrapper } from './styles';

interface Props {
  imageUrl: string;
  alt: string;
  isSmall?: boolean;
}

export const ImageCard = ({ imageUrl, alt, isSmall = false }: Props) => {
  return (
    <Div isSmall={isSmall}>
      <ImageWrapper>
        <Image
          src={imageUrl}
          alt={alt}
          layout="fill"
          objectFit='cover'
        />
      </ImageWrapper>
    </Div>
  );
};
