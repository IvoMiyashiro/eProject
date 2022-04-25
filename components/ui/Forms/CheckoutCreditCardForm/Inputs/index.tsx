import { Dispatch, SetStateAction } from 'react';
import { InputControl, InputNumber } from 'components/ui';
import styled from 'styled-components';

interface Props {
  cardholderName: State;
  cardNumber: State;
  expMonth: State;
  cvc: State;
  dni: State;
  handleCardholderNameValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleCardNumberValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleExpMonthValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleCvcValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleDniValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
}

type State = {
  value: string,
  hasError: boolean,
  errorMsj: string
}

export const Inputs = ({
  cardholderName,
  cardNumber,
  expMonth,
  cvc,
  dni,
  handleCardholderNameValue,
  handleCardNumberValue,
  handleExpMonthValue,
  handleCvcValue,
  handleDniValue,
}: Props) => {
  
  return (
    <Div>
      <Wrapper>
        <InputNumber
          type="credit-card"
          placeholder='Credit Card Number'
          state={cardNumber}
          handleStateValue={handleCardNumberValue}
        />
        <InputControl 
          type='text'
          placeholder='Cardholder Name'
          state={cardholderName}
          handleStateValue={handleCardholderNameValue}
        />
      </Wrapper>
      <Wrapper>
        <InputNumber 
          type='date'
          placeholder='Expiration Date'
          state={expMonth}
          handleStateValue={handleExpMonthValue}
        />
        <InputNumber 
          type='num'
          maxLength={4}
          placeholder='CVC'
          state={cvc}
          handleStateValue={handleCvcValue}
        />
      </Wrapper>
      <Wrapper>
        <InputNumber 
          type='dni'
          placeholder='Cardholder DNI'
          state={dni}
          handleStateValue={handleDniValue}
        />
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
  
const Wrapper = styled.div`
  display: flex;
  gap: 2em;
`;
  
