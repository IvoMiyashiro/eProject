import { FormEvent, useEffect, useState } from 'react';

import { useMercadoPago } from 'hooks';

import { CreditCard } from './CreditCard';
import { Inputs } from './Inputs';
import { ButtonSection } from '../ButtonSection';

import { Div, Wrapper } from './styles';
import { Form, H1, Span, Wrapper as ButtonWrapper } from '../styles';

export const CheckoutCreditCardForm = () => {

  const INPUT_CONTROL_INIT_STATE = {
    value: '',
    hasError: false,
    errorMsj: ''
  };

  const [isLoading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [isCvcFocus, setCvcFocus] = useState(false);
  const [cardholderName, setCardholderName] = useState(INPUT_CONTROL_INIT_STATE);
  const [cardNumber, setCardNumber] = useState(INPUT_CONTROL_INIT_STATE);
  const [expMonth, setExpMonth] = useState(INPUT_CONTROL_INIT_STATE);
  const [expYear, setExpYear] = useState(INPUT_CONTROL_INIT_STATE);
  const [cvc, setCvc] = useState(INPUT_CONTROL_INIT_STATE);
  const [dni, setDni] = useState(INPUT_CONTROL_INIT_STATE);
  const { hasError } = useMercadoPago(setLoading);

  useEffect(() => {
    const formErrors = !cardholderName.hasError && !cardNumber.hasError && !expMonth.hasError && !cvc.hasError && !dni.hasError;
    const formValues = !!cardholderName.value && !!cardNumber.value && !!expMonth.value && !!cvc.value && !!dni.value;
    if (formErrors && formValues) {
      return setValidForm(true);
    }
    setValidForm(false);
  }, [cardholderName, cardNumber ,expMonth ,cvc ,dni]);

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
        errorMsj: '* Month must be filled'
      });
      hasError = true;
    }

    if (expYear.value.length === 0) {
      setExpYear({
        ...expMonth,
        hasError: true,
        errorMsj: '* Year must be filled'
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
  };

  return (
    <Form onSubmit={handleSubmit} id="form-checkout">
      <H1>Complete empty fields</H1>
      <Wrapper>
        <CreditCard
          cardholderName={cardholderName.value}
          cardNumber={cardNumber.value}
          expMonth={expMonth.value}
          expYear={expYear.value}
          cvc={cvc.value}
          isCvcFocus={isCvcFocus}
        />
      </Wrapper>
      <Div>
        <Inputs 
          cardholderName={cardholderName}
          cardNumber={cardNumber}
          expMonth={expMonth}
          expYear={expYear}
          cvc={cvc}
          dni={dni}
          handleCardholderNameValue={setCardholderName}
          handleCardNumberValue={setCardNumber}
          handleExpMonthValue={setExpMonth}
          handleExpYearValue={setExpYear}
          handleCvcValue={setCvc}
          handleDniValue={setDni}
          handleCvcFocus={setCvcFocus}
        />
      </Div>
      <ButtonWrapper>
        <Span>{ hasError && '* Payment not approved.'}</Span>
        <ButtonSection 
          disabled={(!isValidForm) ? true : false}
          isLoading={isLoading}
        />
      </ButtonWrapper>
    </Form>
  );
};

