import { useEffect, useState } from 'react';
import { CreditCardLogo } from './CreditCardLogo';
import { Div, P, Span, Wrapper, Front, Back, Bar, Section, Line, CVCWrapper, LineWrapper } from './styles';

interface Props {
  cardholderName: string;
  cardNumber: string;
  expMonth: string;
  cvc: string;
  isCvcFocus: boolean;
}

export const CreditCard = ({ cardholderName, cardNumber, expMonth, cvc, isCvcFocus }: Props) => {

  const [cardStyle, setCardStyle] = useState<'visa' | 'master' | ''>('');

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
  }, [cardStyle, cardNumber]);

  return (
    <Div type={cardStyle} isCvcFocus={isCvcFocus}>
      <Front>
        <Wrapper>
          <CreditCardLogo type={cardStyle}/>
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
        <Bar />
        <Section>
          <LineWrapper>
            <Line type={cardStyle}/>
            <Line type={cardStyle}/>
            <Line type={cardStyle}/>
            <Line type={cardStyle}/>
            <Line type={cardStyle}/>
            <Line type={cardStyle}/>
            <Line type={cardStyle}/>
            <Line type={cardStyle}/>
          </LineWrapper>
          <CVCWrapper type={cardStyle}>
            { cvc }
          </CVCWrapper>
        </Section>
      </Back>
    </Div>
  );
};
