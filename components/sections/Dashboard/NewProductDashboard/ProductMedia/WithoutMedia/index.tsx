import { DragEvent } from 'react';
import { lightTheme } from 'styles';
import { Div, Section, Button, Span } from './styles';

interface Props {
  dragState: boolean;
  handleClick: () => void | undefined;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: DragEvent<HTMLDivElement>) => void;
}

export const WithoutMedia = ({
  dragState,
  handleClick,
  handleDrop,
  handleDragEnter,
  handleDragLeave }: Props) => {
  return (
    <Div 
      onDrop={handleDrop}
      onDragOver={handleDragEnter}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      style={
        dragState 
          ? { border: `2px dashed ${lightTheme.color_primary_0}`}
          : { border: `2px dashed ${lightTheme.color_neutral_0}`}
      }
    >
      <Section>
        <Button type="button" onClick={handleClick}>
        Add file
        </Button>
        <Button type="button">
        Drag file
        </Button>
        <Span>
        Add Url
        </Span>
      </Section>
    </Div>
  );
};
