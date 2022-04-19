import { FormEvent, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import { AuthContext } from 'context';

import { Providers } from './Providers';
import { Inputs } from './Inputs';
import { LogoIcon, Button, Spinner } from 'components';

import { lightTheme } from 'styles';
import { Form, H1, ButtonWrapper, LogoWrapper, LinkWrapper, P } from './styles';

interface IInputControl {
  value: string;
  error: boolean;
  errorMsj: string;
}

export const SignupForm = () => {
  
  const { signup } = useContext(AuthContext);
  const INPUT_CONTOL_INIT_STATE = {
    value: '',
    error: false,
    errorMsj: ''
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [isValidForm, setValidForm] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [fullNameInputControl, setFullNameInputControl] = useState<IInputControl>(INPUT_CONTOL_INIT_STATE);
  const [emailInputControl, setEmailInputControl] = useState<IInputControl>(INPUT_CONTOL_INIT_STATE);
  const [passwordInputControl, setPasswordInputControl] = useState<IInputControl>(INPUT_CONTOL_INIT_STATE);

  useEffect(() => {
    if (!fullNameInputControl.error && !emailInputControl.error && !passwordInputControl.error) {
      setValidForm(true);
    }
  }, [fullNameInputControl.error, emailInputControl.error, passwordInputControl.error]);

  
  const handleInputSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;

    if (fullNameInputControl.value.length === 0) {
      setFullNameInputControl({
        ...fullNameInputControl,
        error: true,
        errorMsj: '* Name must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (emailInputControl.value.length === 0) {
      setEmailInputControl({
        ...emailInputControl,
        error: true,
        errorMsj: '* Email must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (passwordInputControl.value.length === 0) {
      setPasswordInputControl({
        ...passwordInputControl,
        error: true,
        errorMsj: '* Password must be filled.'
      });
      valid = false;
      setValidForm(false);
    }
    
    if (passwordInputControl.value.length > 0 && passwordInputControl.value.length < 6) {
      setPasswordInputControl({
        ...passwordInputControl,
        error: true,
        errorMsj: '* Password length must be greater than 6.'
      });
      setValidForm(false);
    }

    if (!valid) return;

    setLoading(true);
    const { error, message } = await signup(fullNameInputControl.value, emailInputControl.value, passwordInputControl.value);

    if (error) {
      setValidForm(false);
      if (message === 'Email is already in use.') {
        setEmailInputControl({
          ...emailInputControl,
          error: true,
          errorMsj: '* ' + message
        });
      } else {
        setErrorMessage('Internal server error.');
      }
      return setLoading(false);
    }

    await signIn('credentials', {
      email: emailInputControl.value,
      password: passwordInputControl.value
    });
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
      {
        !!errorMessage && '* ' + errorMessage
      }
      <ButtonWrapper>
        <Button
          bgColor={lightTheme.color_primary_0}
          textColor={lightTheme.color_ui_text_contrast}
          fontSize="1rem"
          type="submit"
          disabled={isValidForm ? false : true}
        >
          {
            isLoading
              ? <Spinner size="20px" color={'#fff'} />
              : 'Sign up'
          }
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
