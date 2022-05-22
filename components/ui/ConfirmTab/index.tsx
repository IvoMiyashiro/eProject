import { Button } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, Wrapper, H2, P, Section } from './styles';

interface Props {
  title: string;
  text: string;
  mainButtonColor: string;
  mainButtonTextColor: string;
  mainButtonChildren: any
  secondButtonColor?: string;
  secondButtonTextColor?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmTab = ({
  title,
  text,
  mainButtonColor,
  mainButtonTextColor,
  mainButtonChildren,
  secondButtonColor = lightTheme.color_neutral_1,
  secondButtonTextColor = lightTheme.color_ui_text_main,
  onConfirm,
  onCancel,
}: Props) => {
  return (
    <Div>
      <H2>{ title }</H2>
      <P>{ text }</P>
      <Section>
        <Wrapper>
          <Button
            bRadius='4px'
            bgColor={mainButtonColor}
            textColor={mainButtonTextColor}
            onClick={onConfirm}
          >
            { mainButtonChildren }
          </Button>
        </Wrapper>
        <Wrapper>
          <Button
            bRadius='4px'
            bgColor={secondButtonColor}
            textColor={secondButtonTextColor}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Wrapper>
      </Section>
    </Div>
  );
};
