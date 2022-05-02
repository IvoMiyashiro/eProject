import { Dispatch, SetStateAction, useContext } from 'react';
import { InputControl, InputNumber } from 'components/ui';
import styled from 'styled-components';
import { AuthContext } from 'context';
import { InputSelect } from 'components/ui/Inputs';

interface Props {
  cardholderName: State;
  cardNumber: State;
  expMonth: State;
  expYear: State;
  cvc: State;
  dni: State;
  handleCardholderNameValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleCardNumberValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleExpMonthValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleExpYearValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleCvcValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleDniValue: Dispatch<SetStateAction<{ value: string; hasError: boolean; errorMsj: string; }>>
  handleCvcFocus: Dispatch<SetStateAction<boolean>>
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
  expYear,
  cvc,
  dni,
  handleCardholderNameValue,
  handleCardNumberValue,
  handleExpMonthValue,
  handleExpYearValue,
  handleCvcValue,
  handleDniValue,
  handleCvcFocus
}: Props) => {
  
  const { customer } = useContext(AuthContext);

  return (
    <Div>
      <Wrapper>
        <InputNumber
          id="form-checkout__cardNumber"
          type="credit-card"
          placeholder='Credit Card Number'
          state={cardNumber}
          handleStateValue={handleCardNumberValue}
        />
        <InputControl
          id="form-checkout__cardholderName"
          type='text'
          placeholder='Cardholder Name'
          state={cardholderName}
          handleStateValue={handleCardholderNameValue}
        />
      </Wrapper>
      <Wrapper>
        <Section>
          <InputSelect
            id="form-checkout__cardExpirationMonth"
            state={expMonth}
            placeholder="Expiration month"
            options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
            handleStateValue={handleExpMonthValue}
          />
          <InputSelect
            id="form-checkout__cardExpirationYear"
            state={expYear}
            placeholder="Expiration Year"
            options={['23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34']}
            handleStateValue={handleExpYearValue}
          />
        </Section>
        <InputNumber 
          id="form-checkout__securityCode"
          type='num'
          maxLength={4}
          placeholder='CVC'
          state={cvc}
          handleFocus={handleCvcFocus}
          handleStateValue={handleCvcValue}
        />
      </Wrapper>
      <Wrapper>
        <InputNumber
          id='form-checkout__identificationNumber'
          type='dni'
          placeholder='Cardholder DNI'
          state={dni}
          handleStateValue={handleDniValue}
        />
      </Wrapper>
      <input hidden type="hidden" name="cardholderEmail" id="form-checkout__cardholderEmail" value={customer!.email}/>
      <select hidden name="issuer" id="form-checkout__issuer"></select>
      <select hidden name="identificationType" id="form-checkout__identificationType"></select>
      <select hidden name="installments" id="form-checkout__installments"></select>
      <button hidden type="submit" id="form-checkout__submit">Pagar</button>
      <progress hidden value="0" className="progress-bar">Cargando...</progress>
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

const Section = styled.section`
  display: flex;
  min-width: 306px;
  gap: 2em;
`;
  
