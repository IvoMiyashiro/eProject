import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { CashIcon, CreditCard, Bitcoin } from 'components/icons';
import { Button, InputRadioCard } from 'components/ui';

import { lightTheme } from 'styles';
import { Form, Div, H1, ButtonWrapper, P } from '../styles';

export const CheckoutPaymentsForm = () => {

  const [cashMethod, setCashMethod] = useState(false);
  const [creditCardMethod, setCreditCardMethod] = useState(false);
  const [bitconMethod, setBitcoinMethod] = useState(false);
  const [nextStep, setNextStep] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <ButtonWrapper>
        <Button
          textColor={lightTheme.color_ui_text_contrast}
          bgColor={lightTheme.color_primary_0}
          bRadius='4px'
          disabled={!nextStep}
          type="submit"
        >
          <P>Confirm</P>
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
