import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Label, Div, Input, P, Wrapper, Span, IconWrapper, TextWrapper, Text } from './styles';

interface Props {
  name: string;
  value: any;
  title?: string;
  text?: string;
  icon: any;
  isSelected: boolean;
  price?: string;
  onChange: Dispatch<SetStateAction<any>>;
  handleSelected: Dispatch<SetStateAction<boolean>>;
  handleOtherValues: Dispatch<SetStateAction<boolean>>[];
}

export const InputRadioCard = ({
  name,
  title,
  text,
  value,
  icon,
  isSelected,
  price,
  onChange,
  handleSelected,
  handleOtherValues,
}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [isHover, setHover] = useState(false);

  const handleClick = () => {
    onChange(value);
    if (inputRef.current?.checked) {
      handleOtherValues?.map(func => {
        func(false);
      });
      return handleSelected(true);
    }

    handleOtherValues?.map(func => {
      func(true);
    });
    handleSelected(false);
  };

  return (
    <Label
      isSelected={isSelected}
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
          <TextWrapper>
            <P>{ title }</P>
            {
              text && <Text>{ text }</Text>
            }
          </TextWrapper>
        </Wrapper>
      </Div>
      <Span>
        { price }
      </Span>
    </Label>
  );
};
