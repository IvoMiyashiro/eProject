import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { emailRegEx } from 'utils';

import { InputControlled } from 'components/ui';

interface Props {
  emailControl: IInputControl;
  passwordControl: IInputControl;
  handleEmailControl: Dispatch<SetStateAction<IInputControl>>;
  handlePasswordControl: Dispatch<SetStateAction<IInputControl>>;
}

type IInputControl = {
  value: string;
  error: boolean;
  errorMsj: string;
}

export const Inputs = ({ emailControl, passwordControl, handleEmailControl, handlePasswordControl }: Props) => {

  const handleInputEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleEmailControl({
      ...emailControl,
      value: e.target.value
    });
  };

  const handleInputEmailError = () => {
    if (!emailRegEx.test(emailControl.value)) {
      return handleEmailControl({
        ...emailControl,
        error: true,
        errorMsj: '* Email is not valid.'
      });
    }

    handleEmailControl({
      ...emailControl,
      error: false,
      errorMsj: ''
    });
  };

  const handleInputPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    handlePasswordControl({
      ...passwordControl,
      value: e.target.value
    });;
  };

  const handleInputPasswordError = () => {
    if (!(passwordControl.value.length > 0)) {
      return handlePasswordControl({
        ...passwordControl,
        error: true,
        errorMsj: '* This field must be filled.'
      });
    }

    handlePasswordControl({
      ...passwordControl,
      error: false,
      errorMsj: ''
    });
  };

  return (
    <InputsWrapper>
      <InputControlled
        type="email"
        placeholder="Email"
        control={emailControl}
        onChange={handleInputEmailChange}
        onBlur={handleInputEmailError}
        onKeyUp={handleInputEmailError}
      />
      <InputControlled
        type="password"
        placeholder="Password"
        control={passwordControl}
        onChange={handleInputPasswordChange}
        onBlur={handleInputPasswordError}
        onKeyUp={handleInputPasswordError}
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
