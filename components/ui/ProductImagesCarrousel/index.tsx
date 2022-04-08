import { useRef, useState } from 'react';
import Image from 'next/image';

import { SideImages } from './SideImages';
import { Div, ImageContainer, ImageWrapper, Section, Wrapper } from './styles';

interface Props {
  images: string[];
  title: string;
}

export const ProductImagesCarrousel = ({ images, title }: Props) => {

  const [imageActive, setImageActive] = useState(0);
  const imageContainerRef = useRef<any>(null);

  const handleImageChange = (index: number) => {
    setImageActive(Number(index));
    if (imageContainerRef.current === null) return;

    const imgWidth = imageContainerRef.current.children[0].offsetWidth;
    imageContainerRef.current.style.transform = `translateX(-${imgWidth * index}px)`;
  };

  return (
    <Div>
      <Wrapper>
        <ImageWrapper ref={imageContainerRef}>
          {
            images.map((img, i) => {
              return (
                <ImageContainer key={i}>
                  <Image
                    alt={title}
                    blurDataURL={img}
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    src={img}
                  />
                </ImageContainer>
              );
            })
          }
        </ImageWrapper>
      </Wrapper>
      <Section>
        {
          images.map((img, i) => {
            return (
              <SideImages
                key={i}
                imageSrc={img}
                imageActive={imageActive}
                index={i}
                alt={title}
                handleImageChange={handleImageChange}
              />
            );
          })
        }
      </Section>
    </Div>
  );
};
