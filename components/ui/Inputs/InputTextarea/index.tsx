import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { Div, Wrapper, Span, Label, InputWrapper } from '../InputControl/styles';
import { TextArea } from './styles';

interface Props {
  placeholder: string;
  state: {
    value: string;
    hasError: boolean;
    errorMsj: string;
  };
  regEx?: RegExp;
  optional?: boolean;
  minLength?: number;
  maxLength?: number;
  handleStateValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string;}>>
}

export const InputTextarea = ({
  placeholder,
  state,
  regEx,
  optional = false,
  minLength,
  maxLength,
  handleStateValue,
}: Props) => {

  const { value, hasError, errorMsj } = state;
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleStateValue(prev => {
      return {
        ...prev,
        value: e.target.value
      };
    });
  };

  const handleInputError = () => {

    if (!optional) {
      if (state.value.length === 0) {
        return handleStateValue(prev => {
          return {
            ...prev,
            hasError: true,
            errorMsj: `* ${placeholder} must be filled.`
          };
        });
      }
    }

    if (!!regEx) {
      if (!regEx.test(state.value)) {
        return handleStateValue(prev => {
          return {
            ...prev,
            error: true,
            errorMsj: `* ${placeholder} is not valid.`
          };
        });
      }
    }

    if (!!minLength) {
      if (state.value.length < minLength) {
        return handleStateValue(prev => {
          return {
            ...prev,
            hasError: true,
            errorMsj: `* ${placeholder} must be greater than ${minLength + 1}.`
          };
        });
      }
    }

    if (!!maxLength) {
      if (state.value.length > maxLength) {
        return handleStateValue(prev => {
          return {
            ...prev,
            hasError: true,
            errorMsj: `* ${placeholder} must be less than ${maxLength + 1}.`
          };
        });
      }
    }

    handleStateValue(prev => {
      return {
        ...prev,
        hasError: false,
        errorMsj: ''
      };
    });
  };

  const textAreaAdjust = () => {
    if (inputRef.current === null) return;
    inputRef.current.style.height = '1px';
    inputRef.current.style.height = (25 + inputRef.current.scrollHeight)+'px';
  };

  return (
    <InputWrapper>
      <Div isFocus={isFocus} onClick={handleFocusInput} error={hasError}>
        <Wrapper>
          <Label isFocus={isFocus} error={hasError}>
            { placeholder }
          </Label>
          <TextArea
            value={value}
            ref={inputRef}
            onChange={handleInputChange}
            onFocus={() => setFocus(true)}
            onBlur={() => {setFocus(false); handleInputError();}}
            onKeyUp={() => {handleInputError(); textAreaAdjust();}}
            autoComplete="none"
          />
        </Wrapper>
      </Div>

      { hasError && <Span>{ errorMsj }</Span> }
    </InputWrapper>
  );
};

