import { useEffect, useState } from 'react';
import { VisaIcon, MasterCardIcon, AmericanExpressIcon } from 'components/icons';
import { AmericanWrapper, Div, LogoPlaceholder, LogoPlaceholderWrapper, LogoWrapper, MasterWrapper, P, Span, VisaWrapper, Wrapper } from './styles';

interface Props {
  cardholderName: string;
  cardNumber: string;
  expMonth: string;
  cvc: string;
}

export const CreditCard = ({ cardholderName, cardNumber, expMonth, cvc }: Props) => {

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
    <Div type={cardStyle}>
      <Wrapper>
        <LogoWrapper>
          {
            cardStyle === '' 
            && 
            <LogoPlaceholderWrapper>
              <LogoPlaceholder />
            </LogoPlaceholderWrapper>
          }
          {
            cardStyle === 'visa'
            &&
            <VisaWrapper>
              <VisaIcon width="80px" height="80px" />
            </VisaWrapper>
          }
          {
            cardStyle === 'master'
            &&
            <MasterWrapper>
              <MasterCardIcon width="60px" height="60px" />
            </MasterWrapper>
          }
          {
            cardStyle === 'american'
            &&
            <AmericanWrapper>
              <AmericanExpressIcon width="80px" height="80px" />
            </AmericanWrapper>
          }
        </LogoWrapper>
      </Wrapper>
      <Wrapper>
        { cardStyle === 'american' && <P>***</P>}
      </Wrapper>
      <Wrapper>
        {
          (cardStyle === 'master' || cardStyle === 'visa')
          &&
          <Span>{ cardNumber }</Span>
        }
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
    </Div>
  );
};
