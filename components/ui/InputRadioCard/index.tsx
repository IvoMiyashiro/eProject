import { useRef } from 'react';
import { Label, Div, Input, P, Wrapper, Span } from './styles';

interface Props {
  name: string;
  value: string;
  icon: any;
  hisValue: boolean;
  price: string;
  handleHisValue: (value: boolean) => void;
  handleOtherValue: (value: boolean) => void;
  handleNextStep: (value: string) => void;
}

export const InputRadioCard = ({
  name,
  value,
  icon,
  hisValue,
  price,
  handleHisValue,
  handleOtherValue,
  handleNextStep
}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    handleNextStep(value);
    if (inputRef.current?.checked) {
      handleOtherValue(false);
      return handleHisValue(true);
    }

    handleOtherValue(true);
    handleHisValue(false);
  };

  return (
    <Label isSelected={hisValue} onClick={handleClick}>
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
          { icon }
          <P>{ value }</P>
        </Wrapper>
      </Div>
      <Span>
        { price }
      </Span>
    </Label>
  );
};
