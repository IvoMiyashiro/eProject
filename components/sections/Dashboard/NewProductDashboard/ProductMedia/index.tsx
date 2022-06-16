import { Dispatch, DragEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { arrayMoveImmutable } from 'array-move';

import { Button } from 'components/ui';
import WithMedia from './WithMedia';
import { WithoutMedia } from './WithoutMedia';

import { lightTheme } from 'styles';
import { Wrapper, H3, Input, Container, Section, ErrorContainer, Span, P } from './styles';

interface Props {
  productMedia: {id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]
  handleProductMedia: Dispatch<SetStateAction<{id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]>>
}

export const ProductMedia = ({ productMedia, handleProductMedia }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  const [imagesCheckedCount, setImagesCheckedCount] = useState(0);
  const [fileError, setFileError] = useState('');
  const MAX_AMOUNT_IMG = 5;

  const handleClick = () => inputRef.current?.click();

  useEffect(() => {
    setImagesCheckedCount(0);
    productMedia.map(image => {
      if (image.isChecked) {
        setImagesCheckedCount(prev => prev + 1);
      }
    });
  }, [productMedia]);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    let productMediaLen = productMedia.length;

    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      const fileTypeError = file.type !== 'image/jpeg' && file.type !== 'image/png';

      if (productMediaLen >= MAX_AMOUNT_IMG) {
        setDrag(false);
        return setFileError('* You can only upload 6 images.');
      } else if (fileTypeError) {
        setFileError('* Invalid image extension. (.jpg, .jpeg, .png)');
      } else if (e.dataTransfer.files && e.dataTransfer.files[i]) {
        handleProductMedia(prev => [
          ...prev,
          {
            id: uuidv4(),
            file: e.dataTransfer.files[i],
            fileUrl: URL.createObjectURL(e.dataTransfer.files[i]),
            isChecked: false,
          }
        ]);
        productMediaLen++;
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

  const handleDeleteImage = () => {
    handleProductMedia(productMedia.filter(image => !image.isChecked)); 
  };

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    handleProductMedia(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
  };

  return (
    <Wrapper>
      {
        imagesCheckedCount > 0
          ? (
            <Section>
              <H3>{ imagesCheckedCount } Elements selected.</H3>
              <Button
                bgColor={lightTheme.color_ui_danger}
                textColor={lightTheme.color_ui_background}
                width="125px"
                height="30px"
                bRadius="4px"
                onClick={handleDeleteImage}
              >
                Delete files
              </Button>
            </Section>
          )
          : <H3>Multimedia elements</H3>
      }
      {
        !!fileError 
        &&
        <ErrorContainer>
          <P> { fileError } </P>
          <Span onClick={() => setFileError('')}> &times; </Span>
        </ErrorContainer>
      }
      {
        productMedia?.length !== 0
          ? (
            <WithMedia
              axis='xy'
              onSortEnd={onSortEnd}
              dragState={drag}
              mediaList={productMedia}
              handleClick={handleClick}
              handleDrop={handleDrop}
              handleDragOver={handleDragEnter}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              handleMediaMediaImage={handleProductMedia}
            />
          )
          : (
            <Container
              onDrop={handleDrop}
              onDragOver={handleDragEnter}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              style={
                drag 
                  ? { border: `2px dashed ${lightTheme.color_primary_0}`}
                  : { border: `2px dashed ${lightTheme.color_neutral_0}`}
              }
            >
              <WithoutMedia handleClick={handleClick} />
            </Container>
          )
      }
      <Input type="file" hidden ref={inputRef} />
    </Wrapper>
  );
};

