import Image from 'next/image';
import { ImageContainer, ImageWrapper } from './styles';

interface Props {
  alt: string;
  imageActive: number;
  imageSrc: string;
  index: number;
  handleImageChange: (index: number) => void
}

export const SideImages = ({
  alt,
  imageActive,
  imageSrc,
  index,
  handleImageChange,
}: Props) => {

  return (
    <ImageWrapper isActive={imageActive === index}>
      <ImageContainer>
        <Image
          alt={alt}
          blurDataURL={imageSrc}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          src={imageSrc}
          onMouseEnter={() => handleImageChange(index)}
        />
      </ImageContainer>
    </ImageWrapper>
  );
};
