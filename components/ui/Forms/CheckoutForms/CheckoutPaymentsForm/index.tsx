import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { CashIcon, CreditCard, Bitcoin } from 'components/icons';
import { InputRadioCard } from 'components/ui';
import { ButtonSection } from '../Button';

import { Form, Div, H1 } from '../styles';

export const CheckoutPaymentsForm = () => {

  const [isLoading, setLoading] = useState(false);
  const [cashMethod, setCashMethod] = useState(false);
  const [creditCardMethod, setCreditCardMethod] = useState(false);
  const [bitconMethod, setBitcoinMethod] = useState(false);
  const [nextStep, setNextStep] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (nextStep === '') return;
    const destination = nextStep === 'Credit Card'
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
        <InputRadioCard
          name="radio-group"
          value="Credit Card"
          icon={<CreditCard width="25px" heigh="25px" />}
          hisValue={creditCardMethod}
          price=""
          handleHisValue={setCreditCardMethod}
          handleOtherValues={[setBitcoinMethod, setCashMethod]}
          handleNextStep={setNextStep}
        />
        <InputRadioCard
          name="radio-group"
          value="Cash"
          icon={<CashIcon width="25px" heigh="25px" />}
          hisValue={cashMethod}
          price=""
          handleHisValue={setCashMethod}
          handleOtherValues={[setCreditCardMethod, setBitcoinMethod]}
          handleNextStep={setNextStep}
        />
        <InputRadioCard
          name="radio-group"
          value="I'm rich, with Bitcoins"
          icon={<Bitcoin width="25px" heigh="25px" />}
          hisValue={bitconMethod}
          price=""
          handleHisValue={setBitcoinMethod}
          handleOtherValues={[setCreditCardMethod, setCashMethod]}
          handleNextStep={setNextStep}
        />
      </Div>
      <ButtonSection 
        disabled={!nextStep}
        isLoading={isLoading}
      />
    </Form>
  );
};
