import { useContext, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import { useForm } from 'hooks';
import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';
import { AuthContext } from 'context';

import { LogoIcon } from 'components/icons';
import { Button, Spinner } from 'components/ui';
import { Providers } from './Providers';
import { Inputs } from './Inputs';

import { lightTheme } from 'styles';
import { Form, H1, ButtonWrapper, LogoWrapper, LinkWrapper, P } from './styles';

export const SignupForm = () => {
  
  const { signup } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [fullNameInputControl, setFullNameInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [emailInputControl, setEmailInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [passwordInputControl, setPasswordInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const { isLoading, isValidForm, handleSubmit } = useForm({
    states: [{
      state: fullNameInputControl,
      handleState: setFullNameInputControl
    }, {
      state: emailInputControl,
      handleState: setEmailInputControl
    }, {
      state: passwordInputControl,
      handleState: setPasswordInputControl
    }],
    callbacks: {
      async startSignup({ setValidForm, setLoading }: any) {
        const { error, message } = await signup(fullNameInputControl.value, emailInputControl.value, passwordInputControl.value);

        if (error) {
          setValidForm(false);
          if (message === 'Email is already in use.') {
            setEmailInputControl({
              ...emailInputControl,
              hasError: true,
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
      }
    }
  });

  return (
    <Form onSubmit={handleSubmit}>
      <LogoWrapper>
        <Link href="/" passHref>
          <LinkWrapper>
            <LogoIcon widht="40px" height="40px" color={lightTheme.color_primary_0}/>
          </LinkWrapper>
        </Link>
        <H1>Sign up</H1>
      </LogoWrapper>
      <Inputs
        fullNameState={fullNameInputControl}
        emailState={emailInputControl}
        passwordState={passwordInputControl}
        handleNameState={setFullNameInputControl}
        handleEmailState={setEmailInputControl}
        handlePasswordState={setPasswordInputControl}
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
