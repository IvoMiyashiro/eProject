import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { CashIcon, CreditCard } from 'components/icons';
import { InputRadioCard } from 'components/ui';
import { ButtonSection } from '../Button';

import { Form, Div, H1, Wrapper as ErrorWrapper, Span } from '../styles';

export const CheckoutPaymentsForm = () => {

  const [isLoading, setLoading] = useState(false);
  const [cashMethod, setCashMethod] = useState(false);
  const [creditCardMethod, setCreditCardMethod] = useState(false);
  const [visaTestCard, setVisaTestCard] = useState(false);
  const [masterTestCard, setMasterTest] = useState(false);
  const [formError, setFormError] = useState(false);
  const [inputRadioValue, setInputRadioValue] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRadioValue === '') return setFormError(true);
    setFormError(false);

    setLoading(true);
    const destination = (inputRadioValue === 'add-new-card') ? '/credit-card' : '/cash';
    router.push('/checkout/payments' + destination);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H1>How are you going to pay?</H1>
      <Div>
        <Wrapper>
          <H2>With credit or debit</H2>
          <InputRadioCard
            name="radio-group"
            title="Visa testing credit card"
            value="visa"
            text='This card allow you to test the payment process'
            icon={<CreditCard width="25px" heigh="25px" />}
            hisValue={visaTestCard}
            price=""
            onChange={setInputRadioValue}
            handleHisValue={setVisaTestCard}
            handleOtherValues={[setCashMethod, setMasterTest, setCreditCardMethod]}
          />
          <InputRadioCard
            name="radio-group"
            title="Master testing credit card"
            value="master"
            text='This card allow you to test the payment process'
            icon={<CreditCard width="25px" heigh="25px" />}
            hisValue={masterTestCard}
            price=""
            onChange={setInputRadioValue}
            handleHisValue={setMasterTest}
            handleOtherValues={[setCashMethod, setVisaTestCard, setCreditCardMethod]}
          />
          <InputRadioCard
            name="radio-group"
            title="Add new card"
            value="add-new-card"
            icon={<CreditCard width="25px" heigh="25px" />}
            hisValue={creditCardMethod}
            price=""
            onChange={setInputRadioValue}
            handleHisValue={setCreditCardMethod}
            handleOtherValues={[setCashMethod, setVisaTestCard, setMasterTest]}
          />
        </Wrapper>
        <Wrapper>
          <H2>With cash</H2>
          <InputRadioCard
            name="radio-group"
            title="Cash"
            value="cash"
            icon={<CashIcon width="25px" heigh="25px" />}
            hisValue={cashMethod}
            price=""
            onChange={setInputRadioValue}
            handleHisValue={setCashMethod}
            handleOtherValues={[setCreditCardMethod]}
          />
        </Wrapper>
      </Div>
      <ErrorWrapper>
        <Span>{ formError && '* You must select one option.'}</Span>
        <ButtonSection 
          disabled={!!!inputRadioValue}
          isLoading={isLoading}
        />
      </ErrorWrapper>
    </Form>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const H2 = styled.h2`
  font-size: 0.9rem;
`;
