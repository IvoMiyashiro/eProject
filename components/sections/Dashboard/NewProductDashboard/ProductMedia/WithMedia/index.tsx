import { DragEvent } from 'react';
import Image from 'next/image';

import { Div, Section } from './styles';
import { lightTheme } from 'styles';
import { ImageCard } from 'components/ui/Cards/ImageCard';

interface Props {
  dragState: boolean;
  mediaList: {file: File, fileUrl: string}[];
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: DragEvent<HTMLDivElement>) => void;
}

export const WithMedia = ({ 
  mediaList,
  dragState,
  handleDrop,
  handleDragEnter,
  handleDragLeave
}: Props) => {
  return (
    <Div
      onDrop={handleDrop}
      onDragOver={handleDragEnter}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      style={
        dragState 
          ? { border: `2px dashed ${lightTheme.color_primary_0}`}
          : { border: '2px dashed transparent'}
      }
    >
      <ImageCard 
        imageUrl={mediaList[0].fileUrl}
        alt={mediaList[0].file.name}
      />
      <Section>
        {
          mediaList.map((image, i) => {
            if (i !== 0) {
              return (
                <ImageCard 
                  imageUrl={image.fileUrl}
                  alt={image.file.name}
                  isSmall
                />
              );
            }
          })
        }
      </Section>
    </Div>
  );
};
