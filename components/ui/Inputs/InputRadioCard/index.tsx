import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Label, Div, Input, P, Wrapper, Span, IconWrapper } from './styles';

interface Props {
  name: string;
  value: string;
  icon: any;
  hisValue: boolean;
  price: string;
  handleHisValue: Dispatch<SetStateAction<boolean>>;
  handleOtherValues: Dispatch<SetStateAction<boolean>>[];
  handleNextStep: (value: string) => void ;
}

export const InputRadioCard = ({
  name,
  value,
  icon,
  hisValue,
  price,
  handleHisValue,
  handleOtherValues,
  handleNextStep
}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [isHover, setHover] = useState(false);

  const handleClick = () => {
    handleNextStep(value);
    if (inputRef.current?.checked) {
      handleOtherValues.map(func => {
        func(false);
      });
      return handleHisValue(true);
    }

    handleOtherValues.map(func => {
      func(true);
    });
    handleHisValue(false);
  };

  return (
    <Label
      isSelected={hisValue}
      isHover={isHover}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <Div>
        <Input 
          type="radio"
          name={ name }
          value={ value }
          ref={inputRef}
        />
      </Div>
      <Div>
        <Wrapper>
          <IconWrapper>
            { icon }
          </IconWrapper>
          <P>{ value }</P>
        </Wrapper>
      </Div>
      <Span>
        { price }
      </Span>
    </Label>
  );
};
