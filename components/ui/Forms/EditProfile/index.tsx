import { FormEvent, SetStateAction, useContext, useEffect, useState } from 'react';

import { AuthContext } from 'context';
import { updateCustomerData as updateCustomerDBData } from 'services';
import { InputControl, Button, Spinner } from 'components/ui';

import { lightTheme } from 'styles';
import { ButtonWrapper, Div, Form, H2, P } from './styles';

interface Props { handleCloseChildren: (value: SetStateAction<boolean>) => void; }

export const EditProfile = ({ handleCloseChildren }: Props) => {

  const { customer, updateCustomerData } = useContext(AuthContext);

  const NAME_INPUT_CONTROL_INIT_STATE = {
    value: '',
    hasError: false,
    errorMsj: ''
  };

  const EMAIL_INPUT_CONTROL_INIT_STATE = {
    value: '',
    hasError: false,
    errorMsj: ''
  };

  const PHONE_INPUT_CONTROL_INIT_STATE = {
    value: '',
    hasError: false,
    errorMsj: ''
  };

  const [nameInputControl, setNameInputControl] = useState(NAME_INPUT_CONTROL_INIT_STATE);
  const [emailInputControl, setEmailInputControl] = useState(EMAIL_INPUT_CONTROL_INIT_STATE);
  const [phoneInputControl, setPhoneInputControl] = useState(PHONE_INPUT_CONTROL_INIT_STATE);
  const [isLoading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(true);

  useEffect(() => {
    if (!!customer) {
      setNameInputControl(prev => {
        return {...prev, value: customer!.name};
      });
      setEmailInputControl(prev => {
        return {...prev, value: customer!.email};
      });
      setPhoneInputControl(prev => {
        return {...prev, value: customer.phone_number ? customer.phone_number : ''};
      });
    }
  }, [customer]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    
    if (nameInputControl.value.length === 0) {
      setNameInputControl({
        ...nameInputControl,
        hasError: true,
        errorMsj: '* Name must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (emailInputControl.value.length === 0) {
      setEmailInputControl({
        ...emailInputControl,
        hasError: true,
        errorMsj: '* Email must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (!valid) return;

    setLoading(true);
    const { name, email, phone_number } = await updateCustomerDBData({ 
      customer_id: customer!.id,
      name: nameInputControl.value,
      email: emailInputControl.value,
      phone_number: phoneInputControl.value
    });
    updateCustomerData({ name, email, phone_number });
    handleCloseChildren(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H2>Edit profile</H2>
      <P>* After submiting the edit profile form you have to restart your session.</P>
      <Div>
        <InputControl
          type="text"
          placeholder="Name"
          state={nameInputControl}
          handleStateValue={setNameInputControl}
        />
        <InputControl
          type="email"
          placeholder="Email"
          state={emailInputControl}
          handleStateValue={setEmailInputControl}
        />
        <InputControl
          type="tel"
          placeholder="Phone"
          state={phoneInputControl}
          handleStateValue={setPhoneInputControl}
        />
      </Div>
      <ButtonWrapper>
        <Button
          textColor={lightTheme.color_ui_text_contrast}
          bgColor={lightTheme.color_primary_0}
          bRadius="4px"
          type="submit"
          disabled={isValidForm ? false : true}
        >
          {
            isLoading
              ? <Spinner size="14px" />
              : 'Confirm'
          }
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
