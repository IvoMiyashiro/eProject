import { Section, Button, Span } from './styles';

interface Props { handleClick: () => void | undefined;}

export const WithoutMedia = ({ handleClick }: Props) => {
  return (
    <>
      <Section>
        <Button type="button" onClick={handleClick}>
          Add file
        </Button>
        <Button type="button">
          Drag file
        </Button>
      </Section>
    </>
  );
};
