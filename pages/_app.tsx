import { useState } from 'react';
import { AppProps } from 'next/app';

import { UiProvider } from 'context';
import { Navbar } from 'components/ui';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles';
import GlobalStyle from 'styles/global';
import { MobileMenu } from 'components/ui/MobileMenu';

function MyApp({ Component, pageProps }: AppProps) {

  const [appTheme, setAppTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <ThemeProvider theme={appTheme}>
      <UiProvider>
        <Navbar handleAppTheme={setAppTheme} />
        <MobileMenu />
        <Component {...pageProps} />
        <GlobalStyle />
      </UiProvider>
    </ThemeProvider>
  );
}

export default MyApp;
