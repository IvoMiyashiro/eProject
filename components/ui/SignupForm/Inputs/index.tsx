import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { emailRegEx, fullNameRegEx } from 'utils';

import { InputControlled } from 'components/ui';

interface Props {
  fullNameState: IInputControl;
  emailState: IInputControl;
  passwordState: IInputControl;
  handleNameState: Dispatch<SetStateAction<IInputControl>>;
  handleEmailState: Dispatch<SetStateAction<IInputControl>>;
  handlePasswordState: Dispatch<SetStateAction<IInputControl>>;
}

type IInputControl = {
  value: string;
  hasError: boolean;
  errorMsj: string;
}

export const Inputs = ({ 
  fullNameState ,
  emailState, 
  passwordState, 
  handleNameState, 
  handleEmailState, 
  handlePasswordState
}: Props) => {

  return (
    <InputsWrapper>
      <InputControlled
        type="text"
        placeholder="Full name"
        regEx={fullNameRegEx}
        state={fullNameState}
        handleStateValue={handleNameState}
      />
      <InputControlled
        type="email"
        placeholder="Email"
        regEx={emailRegEx}
        state={emailState}
        handleStateValue={handleEmailState}
      />
      <InputControlled
        type="password"
        placeholder="Password"
        minLength={6}
        state={passwordState}
        handleStateValue={handlePasswordState}
      />
    </InputsWrapper>
  );
};

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 2em 0;
`;
