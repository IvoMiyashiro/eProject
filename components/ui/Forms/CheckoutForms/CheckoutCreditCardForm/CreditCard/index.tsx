import { useEffect, useState } from 'react';
import { CreditCardLogo } from './CreditCardLogo';
import { Div, P, Span, Wrapper, Front, Back } from './styles';

interface Props {
  cardholderName: string;
  cardNumber: string;
  expMonth: string;
  cvc: string;
  isCvcFocus: boolean;
}

export const CreditCard = ({ cardholderName, cardNumber, expMonth, cvc, isCvcFocus }: Props) => {

  const [cardStyle, setCardStyle] = useState<'visa' | 'master' | 'american' | ''>('');

  useEffect(() => {
    if (!(cardNumber.length > 7)) {
      return setCardStyle('');
    }

    if (cardNumber.charAt(0) === '4' && cardNumber.length > 7) {
      return setCardStyle('visa');
    } 

    if (cardNumber.charAt(0) === '5' && cardNumber.length > 7) {
      return setCardStyle('master');
    }

    if (cardNumber.charAt(0) === '5' && cardNumber.length > 7) {
      return setCardStyle('american');
    }
  }, [cardStyle, cardNumber]);

  return (
    <Div type={cardStyle} isCvcFocus={isCvcFocus}>
      <Front>
        <Wrapper>
          <CreditCardLogo type={cardStyle}/>
        </Wrapper>
        <Wrapper>
          { cardStyle === 'american' && <P>***</P>}
        </Wrapper>
        <Wrapper>
          <Span type={cardStyle}>{ cardNumber }</Span>
        </Wrapper>
        <Wrapper>
          {
            (cardStyle === 'master' || cardStyle === 'visa')
          &&
          <P>{ cardholderName }</P>
          }
          {
            (cardStyle === 'master' || cardStyle === 'visa')
          &&
          <P>{ expMonth }</P>
          }
        </Wrapper>
      </Front>
      <Back>

      </Back>
    </Div>
  );
};
