import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { emailRegEx } from 'utils';

import { InputControl } from 'components/ui';

interface Props {
  emailState: IInputControl;
  passwordState: IInputControl;
  handleEmailState: Dispatch<SetStateAction<IInputControl>>;
  handlePasswordState: Dispatch<SetStateAction<IInputControl>>;
}

type IInputControl = {
  value: string;
  hasError: boolean;
  errorMsj: string;
}

export const Inputs = ({ 
  emailState, 
  passwordState, 
  handleEmailState, 
  handlePasswordState
}: Props) => {

  return (
    <InputsWrapper>
      <InputControl
        type="email"
        placeholder="Email"
        regEx={emailRegEx}
        state={emailState}
        handleStateValue={handleEmailState}
      />
      <InputControl
        type="password"
        placeholder="Password"
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
