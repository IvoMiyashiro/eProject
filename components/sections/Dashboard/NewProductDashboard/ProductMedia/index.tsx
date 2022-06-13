import { Dispatch, DragEvent, SetStateAction, useRef, useState } from 'react';

import { Wrapper } from '../styles';
import { H3, Input } from './styles';
import { WithMedia } from './WithMedia';
import { WithoutMedia } from './WithoutMedia';

interface Props {
  productMedia: {file: File, fileUrl: string}[]
  handleProductMedia: Dispatch<SetStateAction<{ file: File; fileUrl: string; }[]>>
}

export const ProductMedia = ({ productMedia, handleProductMedia }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);

  const handleClick = () => inputRef.current?.click();

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      if (e.dataTransfer.files && e.dataTransfer.files[i]) {
        handleProductMedia(prev => [
          ...prev,
          {
            file: e.dataTransfer.files[i],
            fileUrl: URL.createObjectURL(e.dataTransfer.files[i])
          }
        ]);
      }
    }
    setDrag(false);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
  };

  return (
    <Wrapper>
      <H3>Multimedia elements</H3>
      {
        productMedia.length !== 0
          ? (
            <WithMedia
              dragState={drag}
              mediaList={productMedia}
              handleDrop={handleDrop}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
            />
          )
          : (
            <WithoutMedia
              dragState={drag}
              handleClick={handleClick}
              handleDrop={handleDrop}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
            />
          )
      }
      <Input type="file" hidden ref={inputRef} />
    </Wrapper>
  );
};

