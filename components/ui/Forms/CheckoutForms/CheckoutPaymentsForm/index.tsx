import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { CashIcon, CreditCard, Bitcoin } from 'components/icons';
import { InputRadioCard } from 'components/ui';
import { ButtonSection } from '../Button';

import { Form, Div, H1 } from '../styles';

export const CheckoutPaymentsForm = () => {

  const [isLoading, setLoading] = useState(false);
  const [cashMethod, setCashMethod] = useState(false);
  const [creditCardMethod, setCreditCardMethod] = useState(false);
  const [visaTestCard, setVisaTestCard] = useState(false);
  const [masterTestCard, setMasterTest] = useState(false);
  const [nextStep, setNextStep] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (nextStep === '') return;
    const destination = nextStep === 'Add new card'
      ? '/credit-card'
      : (nextStep === 'Cash')
        ? '/cash'
        : '/bitcoin';
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
            value="Visa testing credit card"
            text='This card allow you to test the payment process'
            icon={<CreditCard width="25px" heigh="25px" />}
            hisValue={visaTestCard}
            price=""
            handleHisValue={setVisaTestCard}
            handleOtherValues={[setCashMethod, setMasterTest, setCreditCardMethod]}
            handleNextStep={setNextStep}
          />
          <InputRadioCard
            name="radio-group"
            value="Mastercard testing credit card"
            text='This card allow you to test the payment process'
            icon={<CreditCard width="25px" heigh="25px" />}
            hisValue={masterTestCard}
            price=""
            handleHisValue={setMasterTest}
            handleOtherValues={[setCashMethod, setVisaTestCard, setCreditCardMethod]}
            handleNextStep={setNextStep}
          />
          <InputRadioCard
            name="radio-group"
            value="Add new card"
            icon={<CreditCard width="25px" heigh="25px" />}
            hisValue={creditCardMethod}
            price=""
            handleHisValue={setCreditCardMethod}
            handleOtherValues={[setCashMethod, setVisaTestCard, setMasterTest]}
            handleNextStep={setNextStep}
          />
        </Wrapper>
        <Wrapper>
          <H2>With cash</H2>
          <InputRadioCard
            name="radio-group"
            value="Cash"
            icon={<CashIcon width="25px" heigh="25px" />}
            hisValue={cashMethod}
            price=""
            handleHisValue={setCashMethod}
            handleOtherValues={[setCreditCardMethod]}
            handleNextStep={setNextStep}
          />
        </Wrapper>
      </Div>
      <ButtonSection 
        disabled={!nextStep}
        isLoading={isLoading}
      />
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
