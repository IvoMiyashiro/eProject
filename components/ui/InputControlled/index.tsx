import { ChangeEvent, useRef, useState } from 'react';
import { Div, Wrapper, Input, Span, Icon, Label } from './styles';

interface Props {
  type: 'email' | 'password' | 'text';
  placeholder: string;
  control: IInputControl;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onKeyUp: () => void;
}

type IInputControl = {
  value: string;
  error: boolean;
  errorMsj: string;
}

export const InputControlled = ({ type, placeholder, control, onChange, onBlur, onKeyUp }: Props) => {

  const { value, error, errorMsj } = control;
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <Div isFocus={isFocus} onClick={handleFocusInput} error={error}>
        <Wrapper>
          <Label isFocus={isFocus} error={error}>
            { placeholder }
          </Label>
          <Input 
            type={type}
            value={value}
            ref={inputRef}
            onChange={onChange}
            onFocus={() => setFocus(true)}
            onBlur={() => {setFocus(false); onBlur();}}
            onKeyUp={onKeyUp}
            autoComplete="none"
          />
        </Wrapper>
      </Div>

      { error && <Span>{ errorMsj }</Span> }
    </div>
  );
};

