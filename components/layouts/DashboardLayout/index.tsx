import { ReactNode, useContext } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { AuthContext } from 'context';

import { DashboardMenu, Spinner } from 'components/ui';

import { lightTheme } from 'styles';
import { Main, SpinnerWrapper, Div, Header, H1, Section, P, Wrapper, Underline, ImageWrapper } from './styles';
import Image from 'next/image';

interface Props {
  children: ReactNode;
  sectionTitle: string;
  pageTitle?: string;
}

export const DashboardLayout = ({ children, pageTitle = '', sectionTitle }: Props) => {

  const { customer } = useContext(AuthContext);
  const { data: session, status }: any = useSession();
  const role = session?.user.role;
  const router = useRouter();
  const USER_PROFILE_IMAGE = !!customer?.profile_image ? customer?.profile_image : '/images/profile_image.png';
  
  if (status === 'loading') {
    return (
      <SpinnerWrapper>
        <Spinner size="24px" />
      </SpinnerWrapper>
    );
  }

  if (status === 'unauthenticated' || (status === 'authenticated' && role !== 'admin')) {
    router.push('/'); 
    return (
      <SpinnerWrapper>
        <Spinner size="24px" color={lightTheme.color_primary_0}/>
      </SpinnerWrapper>
    );
  }

  return (
    <>
      <Head>
        <title>eProject | Dashboard { pageTitle }</title>
      </Head>

      <Div>
        <DashboardMenu />
        <Main>
          <Header>
            <Wrapper>
              <H1>{ sectionTitle }</H1>
              <Underline />
            </Wrapper>
            <Section>
              <ImageWrapper>
                <Image 
                  src={ USER_PROFILE_IMAGE }
                  alt={ customer?.name}
                  layout="fill"
                />
              </ImageWrapper>
              <P>Hi, { customer?.name }</P>
            </Section>
          </Header>
          { children }
        </Main>
      </Div>
    </>

  );
};
