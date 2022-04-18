import { FormEvent, useState } from 'react';
import Link from 'next/link';

import { Providers } from './Providers';
import { Inputs } from './Inputs';
import { Button } from '../';
import { LogoIcon } from 'components/icons';

import { lightTheme } from 'styles';
import { Form, H1, Section, Wrapper, Label, Checkbox, A, ButtonWrapper, LogoWrapper, LinkWrapper, P } from './styles';

interface IInputControl {
  value: string;
  error: boolean;
  errorMsj: string;
}

export const SignupForm = () => {

  const [fullNameInputControl, setFullNameInputControl] = useState<IInputControl>({
    value: '',
    error: false,
    errorMsj: ''
  });

  const [emailInputControl, setEmailInputControl] = useState<IInputControl>({
    value: '',
    error: false,
    errorMsj: ''
  });

  const [passwordInputControl, setPasswordInputControl] = useState<IInputControl>({
    value: '',
    error: false,
    errorMsj: ''
  });

  const handleInputSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailInputControl.value.length === 0) {
      setEmailInputControl({
        ...emailInputControl,
        error: true,
        errorMsj: '* Email must be filled.'
      });
    }

    if (passwordInputControl.value.length === 0) {
      setPasswordInputControl({
        ...passwordInputControl,
        error: true,
        errorMsj: '* Password must be filled.'
      });
    }
  };

  return (
    <Form onSubmit={handleInputSubmit}>
      <LogoWrapper>
        <Link href="/" passHref>
          <LinkWrapper>
            <LogoIcon widht="40px" height="40px" color={lightTheme.color_primary_0}/>
          </LinkWrapper>
        </Link>
        <H1>Sign up</H1>
      </LogoWrapper>
      <Inputs
        nameControl={fullNameInputControl}
        emailControl={emailInputControl}
        passwordControl={passwordInputControl}
        handleNameControl={setFullNameInputControl}
        handleEmailControl={setEmailInputControl}
        handlePasswordControl={setPasswordInputControl}
      />
      <ButtonWrapper>
        <Button
          bgColor={lightTheme.color_primary_0}
          textColor={lightTheme.color_ui_text_contrast}
          fontSize="1rem"
          type="submit"
        >
            Sign up
        </Button>
      </ButtonWrapper>
      <Providers />
      <Link href={'/auth/signin'} passHref>
        <LinkWrapper>
          <P>Already have an account? Sign in</P>
        </LinkWrapper>
      </Link>
    </Form>
  );
};
