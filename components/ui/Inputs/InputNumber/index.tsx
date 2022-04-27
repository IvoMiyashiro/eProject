import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { creditCardDateRegEx, dniRegEx, masterNumberRegEx, visaNumberRegEx } from 'utils';
import { Div, Wrapper, Input, Span, Label, InputWrapper} from '../InputControl/styles';
import { Section, P } from './styles';

interface Props {
  type: 'tel' | 'dni' | 'credit-card' | 'num' | 'date';
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
  handleFocus?: Dispatch<SetStateAction<boolean>>;
}

export const InputNumber = ({
  type,
  placeholder,
  state,
  regEx,
  optional = false,
  minLength,
  maxLength = Number.POSITIVE_INFINITY,
  handleStateValue,
  handleFocus
}: Props) => {

  const { value, hasError, errorMsj } = state;
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    inputRef.current?.focus();
    if (handleFocus) handleFocus(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;

    const newMaxLength = 
      type === 'num'
        ? maxLength
        : (type === 'credit-card') 
          ? 20
          : (type === 'tel')
            ? 12
            : (type == 'date')
              ? 6
              : 11;

    if (value.length === newMaxLength) return;

    if (!(e.target.validity.valid || value === '.' || value === '/' || value === ' ')) return;

    if (type === 'tel') {
      if (value.length === 2) {
        return handleStateValue(prev => {
          return {
            ...prev,
            value: value + ' '
          };
        });
      }
  
      if (e.target.value.length === 7) {
        return handleStateValue(prev => {
          return {
            ...prev,
            value: value + '-'
          };
        });
      }
    }

    if (type === 'credit-card') {
      if (value.length === 4 || value.length === 9 || value.length === 14) {
        return handleStateValue(prev => {
          return {
            ...prev,
            value: value + ' '
          };
        });
      }
    }

    if (type === 'dni') {
      if (value.length === 2 || value.length === 6) {
        return handleStateValue(prev => {
          return {
            ...prev,
            value: value + '.'
          };
        });
      }
    }

    if (type === 'date') {
      if (value.length === 2) {
        return handleStateValue(prev => {
          return {
            ...prev,
            value: value + '/'
          };
        });
      }
    }

    handleStateValue(prev => {
      return {
        ...prev,
        value: value
      };
    });
  };

  const handleOnKeyDown = (e: any) => {
    const char = e.target.value.slice(e.target.value.length - 1);
    if (e.key === 'Backspace' && (char === ' ' || char === '-' || char === '.' || char === '/')) {
      return handleStateValue(prev => {
        return {
          ...prev,
          value: value.slice(0, value.length - 1)
        };
      });
    }
  }; 

  const handleInputError = () => {

    if (type === 'credit-card') {
      const value = state.value.replace(/\s/g, '');
      console.log(value);
      if (!(visaNumberRegEx.test(value) || (masterNumberRegEx.test(value)))) {
        return handleStateValue(prev => ({
          ...prev,
          hasError: true,
          errorMsj: `* ${ placeholder } is not valid.`
        }));
      };
    }

    if (type === 'date') {
      if (!(creditCardDateRegEx.test(state.value))) {
        return handleStateValue(prev => ({
          ...prev,
          hasError: true,
          errorMsj: `* ${ placeholder } is not valid.`
        }));
      };
    }

    if (type === 'dni') {
      if (!(dniRegEx.test(state.value))) {
        return handleStateValue(prev => ({
          ...prev,
          hasError: true,
          errorMsj: `* ${ placeholder } is not valid.`
        }));
      };
    }

    if (!!regEx) {
      if (!(regEx.test(state.value))) {
        return handleStateValue(prev => ({
          ...prev,
          hasError: true,
          errorMsj: `* ${ placeholder } is not valid.`
        }));
      };
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
            {
              type === 'tel' && <P>+54</P>
            }
            <Input
              type="text"
              name={type}
              value={value}
              ref={inputRef}
              onChange={handleInputChange}
              onFocus={() => {setFocus(true); handleFocus && handleFocus(true);}}
              onBlur={() => {setFocus(false); handleInputError(); handleFocus && handleFocus(false);}}
              onKeyDownCapture={handleOnKeyDown}
              onKeyUp={handleInputError}
              autoComplete="none"
              pattern="[0-9 ./]+"
            />
          </Section>
        </Wrapper>
      </Div>

      { hasError && <Span>{ errorMsj }</Span> }
    </InputWrapper>
  );
};

