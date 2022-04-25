import { VisaIcon, MasterCardIcon, AmericanExpressIcon } from 'components/icons';
import { Div, LogoPlaceholderWrapper, LogoPlaceholder, VisaWrapper, MasterWrapper, AmericanWrapper } from './styles';

interface Props {
  type: 'visa' | 'master' | 'american' | '';
}

export const CreditCardLogo = ({ type }: Props) => {
  return (
    <Div>
      {
        type === '' 
      && 
      <LogoPlaceholderWrapper>
        <LogoPlaceholder />
      </LogoPlaceholderWrapper>
      }
      {
        type === 'visa'
      &&
      <VisaWrapper>
        <VisaIcon width="80px" height="80px" />
      </VisaWrapper>
      }
      {
        type === 'master'
      &&
      <MasterWrapper>
        <MasterCardIcon width="60px" height="60px" />
      </MasterWrapper>
      }
      {
        type === 'american'
      &&
      <AmericanWrapper>
        <AmericanExpressIcon width="80px" height="80px" />
      </AmericanWrapper>
      }
    </Div>
  );
};
