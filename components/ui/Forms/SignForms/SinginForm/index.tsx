import { FormEvent, useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

import { AuthContext } from 'context';
import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { Button, Spinner } from 'components/ui';
import { LogoIcon } from 'components/icons';
import { Inputs } from './Inputs';
import { Providers } from './Providers';

import { lightTheme } from 'styles';
import { Form, H1, Section, Wrapper, Label, Checkbox, A, ButtonWrapper, LogoWrapper, LinkWrapper, P } from './styles';

interface IInputControl {
  value: string;
  hasError: boolean;
  errorMsj: string;
}

export const SigninForm = () => {

  const { signin } = useContext(AuthContext);
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState('');
  const [isValidForm, setValidForm] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [emailInputControl, setEmailInputControl] = useState<IInputControl>(INPUT_CONTROL_INIT_STATE);
  const [passwordInputControl, setPasswordInputControl] = useState<IInputControl>(INPUT_CONTROL_INIT_STATE);

  useEffect(() => {
    if (!emailInputControl.hasError && !passwordInputControl.hasError) {
      setValidForm(true);
    }
  }, [emailInputControl.hasError, passwordInputControl.hasError]);

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;

    if (emailInputControl.value.length === 0) {
      setEmailInputControl({
        ...emailInputControl,
        hasError: true,
        errorMsj: '* Email must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (passwordInputControl.value.length === 0) {
      setPasswordInputControl({
        ...passwordInputControl,
        hasError: true,
        errorMsj: '* Password must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (!valid) return;

    setLoading(true);
    const { error, message } = await signin(emailInputControl.value, passwordInputControl.value);

    if (error) {
      setValidForm(false);
      if (message === 'Incorrect email or password.') {
        setEmailInputControl({
          ...emailInputControl,
          hasError: true,
          errorMsj: '*' + message
        });
        setPasswordInputControl({
          ...passwordInputControl,
          hasError: true,
          errorMsj: '*' + message
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
    <Form onSubmit={handleSubmit}>
      <LogoWrapper>
        <Link href="/" passHref>
          <LinkWrapper>
            <LogoIcon widht="40px" height="40px" color={lightTheme.color_primary_0}/>
          </LinkWrapper>
        </Link>
        <H1>Sign in</H1>
      </LogoWrapper>
      <Inputs
        emailState={emailInputControl}
        passwordState={passwordInputControl}
        handleEmailState={setEmailInputControl}
        handlePasswordState={setPasswordInputControl}
      />
      { !!errorMessage && errorMessage }
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
              : 'Sign in'
          }
        </Button>
      </ButtonWrapper>
      <Providers />
      <Link href={router.query.p ? `/auth/signup?q=${ router.query.p }` : '/auth/signup'} passHref>
        <LinkWrapper>
          <P>Don&#8217;t have an account? Create a new one</P>
        </LinkWrapper>
      </Link>
    </Form>
  );
};
