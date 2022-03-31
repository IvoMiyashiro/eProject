import { useState } from 'react';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { UiProvider } from 'context';
import { Navbar } from 'components/ui';
import { Cart } from 'components/ui/Cart';
import { MobileMenu } from 'components/ui/MobileMenu';

import GlobalStyle from 'styles/global';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles';

function MyApp({ Component, pageProps }: AppProps) {

  const [appTheme, setAppTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}>
      <ThemeProvider theme={appTheme}>
        <UiProvider>
          <Navbar handleAppTheme={setAppTheme} />
          <MobileMenu />
          <Cart />
          <Component {...pageProps} />
          <GlobalStyle />
        </UiProvider>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
