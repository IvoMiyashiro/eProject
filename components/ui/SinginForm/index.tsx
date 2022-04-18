import { FormEvent, useState } from 'react';

import { Button } from '../';
import { Inputs } from './Inputs';

import { lightTheme } from 'styles';
import { Form, H1, Section, Wrapper, Label, Checkbox, A, ButtonWrapper, LogoWrapper, LinkWrapper } from './styles';
import { LogoIcon } from 'components/icons/Logo';
import { Providers } from './Providers';
import Link from 'next/link';
import { P } from '../MapLinks';

interface IInputControl {
  value: string;
  error: boolean;
  errorMsj: string;
}

export const SigninForm = () => {

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
        <LogoIcon widht="40px" height="40px" color={lightTheme.color_primary_0}/>
        <H1>Sign in</H1>
      </LogoWrapper>
      <Inputs
        emailControl={emailInputControl}
        passwordControl={passwordInputControl}
        handleEmailControl={setEmailInputControl}
        handlePasswordControl={setPasswordInputControl}
      />
      <Section>
        <Wrapper>
          <Label>
            <Checkbox type="checkbox" /> 
              Remember me
          </Label>
        </Wrapper>
        <Wrapper>
          <A>Forgot Password?</A>
        </Wrapper>
      </Section>
      <ButtonWrapper>
        <Button
          bgColor={lightTheme.color_primary_0}
          textColor={lightTheme.color_ui_text_contrast}
          fontSize="1rem"
          type="submit"
        >
            Sign in
        </Button>
      </ButtonWrapper>
      <Providers />
      <Link href={'/auth/signup'} passHref>
        <LinkWrapper>
          <P>Don&#8217;t have an account? Create a new one</P>
        </LinkWrapper>
      </Link>
    </Form>
  );
};
