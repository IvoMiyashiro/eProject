import { useEffect, useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';

import { ProviderButton } from 'components/ui';

import { Div, Span, ButtonWrapper, Wrapper } from './styles';

export const Providers = () => {

  const [providers, setProviders] = useState<any>({});

  useEffect(() => {
    getProviders().then( prov => setProviders(prov));
  }, []);

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
            onClick={() => signIn(providers.github.id)}
          >
            Sign in with Github
          </ProviderButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <ProviderButton
            type="button"
            logo="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png"
            bgColor='#4c8bf5'
            textColor='#fff'
            onClick={() => signIn(providers.google.id)}
          >
            Sign in with Google
          </ProviderButton>
        </ButtonWrapper>
      </Wrapper>
    </Div>
  );
};
