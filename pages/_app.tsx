import { useState } from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { UiProvider, CartProvider } from 'context';
import { Navbar, Cart, MobileMenu } from 'components/ui';

import GlobalStyle from 'styles/global';
import { lightTheme } from 'styles';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [appTheme, setAppTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={appTheme}>
        <UiProvider>
          <CartProvider>
            <Navbar handleAppTheme={setAppTheme} />
            <MobileMenu />
            <Cart />
            <Component {...pageProps} />
            <GlobalStyle />
          </CartProvider>
        </UiProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
