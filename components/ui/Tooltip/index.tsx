import { ReactNode, Dispatch, SetStateAction } from 'react';
import { Span, Wrapper, Div } from './styles';

interface Props {
  children: ReactNode;
  bgColor?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

export const Tooltip = ({
  children,
  bgColor = '#000',
  top = 'auto',
  bottom = 'auto',
  left = 'auto',
  right = 'auto',
  handleClose
}: Props) => {
  return (
    <>
      <Span onClick={() => handleClose(false)} />
      <Wrapper top={top} bottom={bottom} left={left} right={right}>
        <Div bgColor={bgColor}>
          { children }
        </Div>
      </Wrapper>
    </>
  );
};

