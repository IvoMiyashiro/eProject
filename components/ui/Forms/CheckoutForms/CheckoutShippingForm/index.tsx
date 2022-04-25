import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { ShopIcon, TruckIcon } from 'components/icons';
import { Button, InputRadioCard } from 'components';

import { lightTheme } from 'styles';
import { Form, Div, H1, ButtonWrapper, P } from '../styles';

export const CheckoutShippingForm = () => {

  const [shippingIRSelected, setShippingIRSelected] = useState(false);
  const [takeAwayIRSelected, setTakeAwayIRSelected] = useState(false);
  const [nextStep, setNextStep] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const destination = nextStep === 'Ship to my home' ? '/address' : '/payments';
    router.push('/checkout' + destination);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H1>How are you going to recive your product?</H1>
      <Div>
        <InputRadioCard
          name="radio-group"
          value="Ship to my home"
          icon={<TruckIcon width="25px" heigh="25px" />}
          hisValue={shippingIRSelected}
          price="Free"
          handleHisValue={setShippingIRSelected}
          handleOtherValues={[setTakeAwayIRSelected]}
          handleNextStep={setNextStep}
        />
        <InputRadioCard
          name="radio-group"
          value="Take away from shop"
          icon={<ShopIcon width="25px" heigh="25px" />}
          hisValue={takeAwayIRSelected}
          price="Free"
          handleHisValue={setTakeAwayIRSelected}
          handleOtherValues={[setShippingIRSelected]}
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
