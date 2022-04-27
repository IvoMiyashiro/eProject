import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { ShopIcon, TruckIcon } from 'components/icons';
import { InputRadioCard } from 'components';

import { Form, Div, H1 } from '../styles';
import { ButtonSection } from '../Button';

export const CheckoutShippingForm = () => {

  const [isLoading, setLoading] = useState(false);
  const [shippingIRSelected, setShippingIRSelected] = useState(false);
  const [takeAwayIRSelected, setTakeAwayIRSelected] = useState(false);
  const [nextStep, setNextStep] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
      <ButtonSection 
        disabled={!nextStep}
        isLoading={isLoading}
      />
    </Form>
  );
};
