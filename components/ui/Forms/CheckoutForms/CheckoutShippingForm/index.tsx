import { FormEvent, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { CheckoutContext } from 'context';
import { ShopIcon, TruckIcon } from 'components/icons';
import { InputRadioCard } from 'components/ui';
import { ButtonSection } from '../ButtonSection';

import { Form, Div, H1, Span, Wrapper } from '../styles';

export const CheckoutShippingForm = () => {

  const { setShippingMethod } = useContext(CheckoutContext);
  const [formError, setFormError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [inputRadioValue, setInputRadioValue] = useState('');
  const [shippingIRSelected, setShippingIRSelected] = useState(false);
  const [takeAwayIRSelected, setTakeAwayIRSelected] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShippingMethod(inputRadioValue);
    if (inputRadioValue === '' || inputRadioValue === undefined) return setFormError(true);
    setFormError(false);
    setLoading(true);
    const destination = (inputRadioValue === 'delivery') ? '/address' : '/payments';
    router.push('/checkout' + destination);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H1>How are you going to recive your product?</H1>
      <Div>
        <InputRadioCard
          name="radio-group"
          title="Ship to my home"
          value="delivery"
          icon={<TruckIcon width="25px" heigh="25px" />}
          isSelected={shippingIRSelected}
          price="Free"
          onChange={setInputRadioValue}
          handleSelected={setShippingIRSelected}
          handleOtherValues={[setTakeAwayIRSelected]}
        />
        <InputRadioCard
          name="radio-group"
          title="Pick up from shop"
          value="pick up"
          icon={<ShopIcon width="25px" heigh="25px" />}
          isSelected={takeAwayIRSelected}
          price="Free"
          onChange={setInputRadioValue}
          handleSelected={setTakeAwayIRSelected}
          handleOtherValues={[setShippingIRSelected]}
        />
      </Div>
      <Wrapper>
        <Span>{ formError && '* You must select one option.'}</Span>
        <ButtonSection 
          disabled={!!!inputRadioValue}
          isLoading={isLoading}
        />
      </Wrapper>
    </Form>
  );
};

