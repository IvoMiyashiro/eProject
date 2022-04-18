import { ProviderButton } from 'components/ui';
import { Div, Span, ButtonWrapper, Wrapper } from './styles';

export const Providers = () => {
  return (
    <Div>
      <Span>OR</Span>
      <Wrapper>
        <ButtonWrapper>
          <ProviderButton
            type="button"
            logo="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            bgColor='#000'
            textColor='#fff'
            onClick={null}
          >
            Sign up with Github
          </ProviderButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <ProviderButton
            type="button"
            logo="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"
            bgColor='#4c8bf5'
            textColor='#fff'
            onClick={null}
          >
            Sign up with Google
          </ProviderButton>
        </ButtonWrapper>
      </Wrapper>
    </Div>
  );
};
