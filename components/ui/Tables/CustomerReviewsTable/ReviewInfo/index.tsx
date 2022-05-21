import { Rating, Button } from 'components/ui';
import { lightTheme } from 'styles';
import { Div, H2, H3, Section, P, Wrapper, ButtonWrapper } from './styles';

interface Props {
  rating: number;
  pros: string;
  cons: string;
  overall: string;
  handleDeleteModalOpen: (value: boolean) => void;
}

export const ReviewInfo = ({ rating, pros, cons, overall, handleDeleteModalOpen }: Props) => {

  const formatedText = (text: string) => {
    const newText = text.split('\n').map((str, i) => <P key={i}>{str}</P>);
    return newText;
  };

  return (
    <Div>
      <H2>Review Infomation</H2>
      <Wrapper>
        <Rating rating={rating} size="18px"/>
        <Section>
          <H3>Pros:</H3>
          { formatedText(pros) }
        </Section>
        <Section>
          <H3>Cons:</H3>
          { formatedText(cons) }
        </Section>
        <Section>
          <H3>Overall:</H3>
          { formatedText(overall) }
        </Section>
      </Wrapper>
      <ButtonWrapper>
        <Button
          bRadius='4px'
          textColor={lightTheme.color_ui_text_contrast}
          bgColor={lightTheme.color_ui_danger}
          onClick={() => handleDeleteModalOpen(true)}
        >
          Delete Review
        </Button>
      </ButtonWrapper>
    </Div>
  );
};
