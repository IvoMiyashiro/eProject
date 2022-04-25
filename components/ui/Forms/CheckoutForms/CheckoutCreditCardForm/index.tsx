import { useState } from 'react';

import { Button } from 'components/ui';
import { CreditCard } from './CreditCard';
import { Inputs } from './Inputs';

import { lightTheme } from 'styles';
import { Div, Wrapper } from './styles';
import { Form, H1, ButtonWrapper } from '../styles';

export const CheckoutCreditCardForm = () => {

  const INPUT_CONTROL_INIT_STATE = {
    value: '',
    hasError: false,
    errorMsj: ''
  };

  const [isValidForm, setValidForm] = useState(false);
  const [cardholderName, setCardholderName] = useState(INPUT_CONTROL_INIT_STATE);
  const [cardNumber, setCardNumber] = useState(INPUT_CONTROL_INIT_STATE);
  const [expMonth, setExpMonth] = useState(INPUT_CONTROL_INIT_STATE);
  const [cvc, setCvc] = useState(INPUT_CONTROL_INIT_STATE);
  const [dni, setDni] = useState(INPUT_CONTROL_INIT_STATE);
  const [isCvcFocus, setCvcFocus] = useState(false);

  return (
    <Form>
      <H1>Complete empty fields</H1>
      <Wrapper>
        <CreditCard
          cardholderName={cardholderName.value}
          cardNumber={cardNumber.value}
          expMonth={expMonth.value}
          cvc={cvc.value}
          isCvcFocus={isCvcFocus}
        />
      </Wrapper>
      <Div>
        <Inputs 
          cardholderName={cardholderName}
          cardNumber={cardNumber}
          expMonth={expMonth}
          cvc={cvc}
          dni={dni}
          handleCardholderNameValue={setCardholderName}
          handleCardNumberValue={setCardNumber}
          handleExpMonthValue={setExpMonth}
          handleCvcValue={setCvc}
          handleDniValue={setDni}
          handleCvcFocus={setCvcFocus}
        />
      </Div>
      <ButtonWrapper>
        <Button
          textColor={lightTheme.color_ui_text_contrast}
          bgColor={lightTheme.color_primary_0}
          bRadius='4px'
          disabled={!isValidForm}
          type="submit"
        >
          Confirm
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
