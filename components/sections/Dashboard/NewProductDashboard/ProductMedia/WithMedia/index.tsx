import { Dispatch, DragEvent, SetStateAction } from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import { ImageCard } from 'components/ui';
import { ImageIcon } from 'components/icons';

import { Button, Div, HoverBox, Section, Wrapper } from './styles';

interface Props {
  dragState: boolean;
  mediaList: {id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]
  handleClick: () => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  handleMediaMediaImage: Dispatch<SetStateAction<{id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]>>;
}

const WithMedia = ({ 
  mediaList,
  dragState,
  handleClick,
  handleDrop,
  handleDragEnter,
  handleDragLeave,
  handleMediaMediaImage,
}: Props) => {
  return (
    <Div
      onDrop={handleDrop}
      onDragOver={handleDragEnter}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      {
        dragState
        &&
        <HoverBox>
          <ImageIcon width="35px" height="35px" />
        </HoverBox>
      }
      <Section>
        {
          mediaList.map((image, i) => {
            return (
              <ImageCard
                key={i} 
                index={i}
                image={image}
                handleMediaMediaImage={handleMediaMediaImage}
                isSmall
              />
            );
          })
        }
        {
          mediaList?.length >= 1 && mediaList?.length < 5
          &&
          <Wrapper>
            <Button type="button" onClick={handleClick}>
              Add
            </Button>
          </Wrapper>
        }
      </Section>
    </Div>
  );
};

export default SortableContainer(WithMedia);
