import { useState } from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { UiProvider, CartProvider, AuthProvider, CheckoutProvider } from 'context';

import GlobalStyle from 'styles/global';
import { lightTheme } from 'styles';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [appTheme, setAppTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <UiProvider>
          <ThemeProvider theme={appTheme}>
            <CartProvider>
              <CheckoutProvider>
                <Component {...pageProps} />
                <GlobalStyle />
              </CheckoutProvider>
            </CartProvider>
          </ThemeProvider>
        </UiProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
