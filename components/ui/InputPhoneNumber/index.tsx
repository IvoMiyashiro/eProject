import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { Div, Wrapper, Input, Span, Label, InputWrapper, Section, P } from './styles';

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

export const InputPhoneNumber = ({
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.value.length === 13) return;

    if (e.target.value.length === 2) {
      return handleStateValue(prev => {
        return {
          ...prev,
          value: e.target.value + ' '
        };
      });
    }

    if (e.target.value.length === 7) {
      return handleStateValue(prev => {
        return {
          ...prev,
          value: e.target.value + '-'
        };
      });
    }

    handleStateValue(prev => {
      return {
        ...prev,
        value: e.target.value
      };
    });
  };

  const handleOnKeyDown = (e: any) => {
    const char = e.target.value.slice(e.target.value.length - 1);
    if (e.key === 'Backspace' && (char === ' ' || char === '-')) {
      return handleStateValue(prev => {
        return {
          ...prev,
          value: value.slice(0, value.length - 1)
        };
      });
    }
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

  return (
    <InputWrapper>
      <Div isFocus={isFocus} onClick={handleFocusInput} error={hasError}>
        <Wrapper>
          <Label isFocus={isFocus} error={hasError}>
            { placeholder }
          </Label>
          <Section>
            <P>+54</P>
            <Input
              type="tel"
              value={value}
              ref={inputRef}
              onChange={handleInputChange}
              onFocus={() => setFocus(true)}
              onBlur={() => {setFocus(false); handleInputError();}}
              onKeyDownCapture={handleOnKeyDown}
              onKeyUp={handleInputError}
              autoComplete="none"
            />
          </Section>
        </Wrapper>
      </Div>

      { hasError && <Span>{ errorMsj }</Span> }
    </InputWrapper>
  );
};

