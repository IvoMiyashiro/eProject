import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ArrowDownIcon } from 'components/icons';

import { lightTheme } from 'styles';
import { Div, Label, Input, Wrapper, Section, Ul, Li, IconWrapper, Span } from './styles';

interface Props {
  id?: string;
  name?: string;
  state: {
    value: string;
    hasError: boolean;
    errorMsj: string;
  };
  placeholder: string;
  options: string[];
  handleStateValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
}

export const InputSelect = ({
  id = '',
  name= '',
  state,
  placeholder,
  options,
  handleStateValue
}: Props) => {
  
  const { value, hasError, errorMsj } = state;
  const [hasFocus, setHasFocus] = useState(false);
  const [isFocus, setFocus] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!hasFocus) return;

    if (value.length === 0) {
      return handleStateValue(prev => ({
        ...prev,
        hasError: true,
        errorMsj: `* ${ placeholder } must be filled.`
      }));
    }
    handleStateValue(prev => ({
      ...prev,
      hasError: false,
      errorMsj: ''
    }));
  },[value, placeholder, handleStateValue, hasFocus]);

  const handleFocusInput = () => {
    setOpen(prev => !prev);
    if (!isOpen) return setFocus(true);
    setFocus(false);
  };

  const handleSelectValue = (option: string) => {
    setOpen(prev => !prev);
    handleStateValue(prev => ({...prev, value: option}));
    setFocus(false);
    setHasFocus(true);
  };

  return (
    <Div ref={inputRef}>
      <select hidden name={name} id={id} value={state.value} onChange={() => {}}>
        <option value={state.value}></option>
      </select>
      <Section isFocus={isFocus} onClick={handleFocusInput} error={hasError}>
        <Label isFocus={isFocus} error={hasError}>{ placeholder }</Label>
        <Wrapper>
          <Input 
            type="text"
            value={value}
            autoComplete="none"
            disabled={true}
          />
          <IconWrapper>
            <ArrowDownIcon width="22px" height="22px" color={hasError ? lightTheme.color_ui_danger : ''}/>
          </IconWrapper>
        </Wrapper>
      </Section>
      { hasError && <Span>{ errorMsj }</Span> }
      {
        isOpen 
        &&
        <Ul>
          <Li onClick={() => handleSelectValue('')}></Li>
          {
            options.map((option, i) => {
              return (
                <Li 
                  key={i}
                  onClick={() => handleSelectValue(option)}
                >
                  { option }
                </Li>
              );
            })
          }
        </Ul>
      }
    </Div>
  );
};
