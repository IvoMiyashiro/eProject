import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { CreditCard } from './CreditCard';
import { Inputs } from './Inputs';
import { ButtonSection } from '../Button';

import { Div, Wrapper } from './styles';
import { Form, H1 } from '../styles';

export const CheckoutCreditCardForm = () => {

  const INPUT_CONTROL_INIT_STATE = {
    value: '',
    hasError: false,
    errorMsj: ''
  };

  const [isLoading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [cardholderName, setCardholderName] = useState(INPUT_CONTROL_INIT_STATE);
  const [cardNumber, setCardNumber] = useState(INPUT_CONTROL_INIT_STATE);
  const [expMonth, setExpMonth] = useState(INPUT_CONTROL_INIT_STATE);
  const [cvc, setCvc] = useState(INPUT_CONTROL_INIT_STATE);
  const [dni, setDni] = useState(INPUT_CONTROL_INIT_STATE);
  const [isCvcFocus, setCvcFocus] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!cardholderName.hasError && !cardNumber.hasError && !expMonth.hasError && !cvc.hasError && !dni.hasError) {
      setValidForm(true);
    }
  }, [cardholderName.hasError, cardNumber.hasError ,expMonth.hasError ,cvc.hasError ,dni.hasError]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;

    if (cardholderName.value.length === 0) {
      setCardholderName({
        ...cardholderName,
        hasError: true,
        errorMsj: '* Cardholder Name must be filled'
      });
      hasError = true;
    }

    if (cardNumber.value.length === 0) {
      setCardNumber({
        ...cardNumber,
        hasError: true,
        errorMsj: '* Credit Card Number must be filled'
      });
      hasError = true;
    }

    if (expMonth.value.length === 0) {
      setExpMonth({
        ...expMonth,
        hasError: true,
        errorMsj: '* Expiration Date must be filled'
      });
      hasError = true;
    }

    if (cvc.value.length === 0) {
      setCvc({
        ...cvc,
        hasError: true,
        errorMsj: '* CVC must be filled'
      });
      hasError = true;
    }

    if (dni.value.length === 0) {
      setDni({
        ...dni,
        hasError: true,
        errorMsj: '* DNI must be filled'
      });
      hasError = true;
    }

    if (hasError) return setValidForm(false);
    setLoading(true);
    router.push('/checkout/summary');
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <ButtonSection 
        disabled={!isValidForm}
        isLoading={isLoading}
      />
    </Form>
  );
};
