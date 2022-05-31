import { useState } from 'react';
import styled from 'styled-components';

import { useMercadoPago } from 'hooks';

import { CreditCard } from 'components/icons';
import { InputRadioCard, LinkCard } from 'components/ui';
import { ButtonSection } from '../ButtonSection';
import { MercadoPagoForm } from '../MercadoPagoForm';

import { Form, Div, H1, Wrapper as ErrorWrapper, Span } from '../styles';

export const CheckoutPaymentsForm = () => {

  const [isLoading, setLoading] = useState(false);
  const [visaTestCard, setVisaTestCard] = useState(false);
  const [masterTestCard, setMasterTest] = useState(false);
  const [inputRadioValue, setInputRadioValue] = useState<'master' | 'visa' | string>('');
  const { hasError } = useMercadoPago(setLoading);

  return (
    <Form id="form-checkout">
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
            isSelected={visaTestCard}
            onChange={setInputRadioValue}
            handleSelected={setVisaTestCard}
            handleOtherValues={[setMasterTest]}
          />
          <InputRadioCard
            name="radio-group"
            title="Master testing credit card"
            value="master"
            text='This card allow you to test the payment process'
            icon={<CreditCard width="25px" heigh="25px" />}
            isSelected={masterTestCard}
            onChange={setInputRadioValue}
            handleSelected={setMasterTest}
            handleOtherValues={[setVisaTestCard]}
          />
          <LinkCard
            title="Add new card"
            icon={<CreditCard width="25px" heigh="25px" />}
            href="/checkout/payments/credit-card"
          />
        </Wrapper>
      </Div>
      <ErrorWrapper>
        <Span>{ hasError && '* Payment not approved.'}</Span>
        <ButtonSection
          disabled={!!!inputRadioValue}
          isLoading={isLoading}
        />
      </ErrorWrapper>
      <MercadoPagoForm visaCardSelected={visaTestCard}/>
    </Form>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const H2 = styled.h2`
  font-size: 0.9rem;
`;
