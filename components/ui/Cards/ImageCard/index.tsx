import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { SortableElement } from 'react-sortable-hoc';

import { VerticalGridIcon } from 'components/icons';

import { Div, ImageWrapper, Input, Wrapper } from './styles';

interface Props {
  image: {id?: string; file?: File, fileUrl?: string; isChecked?: boolean};
  isSmall?: boolean;
  handleMediaMediaImage: Dispatch<SetStateAction<{id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]>>;
}

const ImageCard = ({ image, isSmall = false, handleMediaMediaImage }: Props) => {
  const { id, file, fileUrl, isChecked } = image;
  const [isHover, setHover] = useState(false);

  const handleInputChange = () => {
    handleMediaMediaImage(prev => {
      return prev.map(image => {
        if (image.id === id) {
          return {
            ...image,
            isChecked: !isChecked
          };
        }
        return image;
      });
    });
  };

  return (
    <Div 
      isSmall={isSmall}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ImageWrapper>
        <Image
          src={fileUrl!}
          alt={file!.name}
          layout="fill"
          objectFit='cover'
        />
      </ImageWrapper>
      {
        (isHover || isChecked)
        &&
        <Wrapper>
          <Input type="checkbox" checked={isChecked} onChange={handleInputChange} />
          {
            !isChecked && <VerticalGridIcon width="23px" height="23px" />
          }
        </Wrapper>
      }
    </Div>
  );
};

export default SortableElement(ImageCard);
