import { Button } from 'components/ui';

import { lightTheme } from 'styles';
import { Modal } from '../Modal';
import { Div, Wrapper, H2, P, Section } from './styles';

interface Props {
  isOpen: boolean;
  title: string;
  text: string;
  mainButtonColor: string;
  mainButtonTextColor: string;
  mainButtonChildren: any
  secondButtonColor?: string;
  secondButtonTextColor?: string;
  onConfirm: any;
  onCancel: () => void;
  handleOpen: (value: boolean) => void;
}

export const ConfirmTab = ({
  isOpen,
  title,
  text,
  mainButtonColor,
  mainButtonTextColor,
  mainButtonChildren,
  secondButtonColor = lightTheme.color_neutral_1,
  secondButtonTextColor = lightTheme.color_ui_text_main,
  onConfirm,
  onCancel,
  handleOpen,
}: Props) => {
  return (
    <>
      {
        isOpen
        &&
        <Modal handleCloseChildren={() => handleOpen(false)}>
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
        </Modal>
      }
    </>
  );
};
