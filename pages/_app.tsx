import { useState } from 'react';
import { AppProps } from 'next/app';
import { UiProvider } from 'context';
import { Navbar, Cart, MobileMenu } from 'components/ui';

import GlobalStyle from 'styles/global';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles';

function MyApp({ Component, pageProps }: AppProps) {

  const [appTheme, setAppTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <ThemeProvider theme={appTheme}>
      <UiProvider>
        <Navbar handleAppTheme={setAppTheme} />
        <MobileMenu />
        <Cart />
        <Component {...pageProps} />
        <GlobalStyle />
      </UiProvider>
    </ThemeProvider>
  );
}

export default MyApp;
