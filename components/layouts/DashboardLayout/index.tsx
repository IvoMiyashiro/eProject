import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { DashboardMenu, Spinner } from 'components/ui';

import { lightTheme } from 'styles';
import { Main, SpinnerWrapper, Div } from './styles';

interface Props { children: ReactNode; }

export const DashboardLayout = ({ children }: Props) => {

  const { data: session, status }: any = useSession();
  const role = session?.user.role;
  const router = useRouter();
  
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
    <Div>
      <DashboardMenu />
      <Main>
        { children }
      </Main>
    </Div>
  );
};
