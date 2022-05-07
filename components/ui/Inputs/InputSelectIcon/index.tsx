import { MouseEvent, useRef, useState } from 'react';
import { Closer, Div, InputWrapper, Section, Input, Ul, Li, Wrapper } from './styles';

interface Props {
  icon: any;
  values: string[];
  name: string;
  id?: string;
}

export const InputSelectIcon = ({ icon: Icon, values, name, id }: Props) => {

  const [inputValue, setInputValue] = useState(values[0]);
  const [isFocus, setFocus] = useState(false);
  const closerRef = useRef(null);


  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === closerRef.current) {
      setFocus(false);
    }
  };

  return (
    <div onClick={handleClick}>
      <Div onClick={() => setFocus(prev => !prev)}>
        <InputWrapper>
          <select hidden name={name} id={id}>
            <option value={inputValue}></option>
          </select>
          <Wrapper>
            <Icon 
              width="22px"
              height="22px"
            />
          </Wrapper>
          <Section>
            <Input
              type="text"
              value={inputValue}
              autoComplete="none"
              disabled
            />
          </Section>
        </InputWrapper>
        <Ul isOpen={isFocus}>
          {
            values.map((value, i) => (
              <Li 
                key={i}
                onClick={() => setInputValue(value)}
              >
                { value }
              </Li>
            ))
          }
        </Ul>
      </Div>
      {
        isFocus
        &&
        <Closer ref={closerRef}/>
      }
    </div>
  );
};
