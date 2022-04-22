import { useContext } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from 'context';

import { Logo, Button } from 'components/ui';
import { LinksList } from '../LinksList';
import { UserDropdown } from '../UserDropdown';

import { lightTheme } from 'styles';
import { Aside, Section, ButtonWrapper } from './styles';

interface Props {
  isMenuOpen: boolean;
}

export const AsideMobileMenu = ({ isMenuOpen }: Props) => {

  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Aside isOpen={isMenuOpen}>
      <Section>
        <Logo
          isLink={true}
          logoColor={lightTheme.color_tertiary_0}
          withText={false}
          size="55px"
        />
      </Section>
      <LinksList />
      {
        isLoggedIn
          ? <UserDropdown />
          : (
            <ButtonWrapper>
              <Button
                bgColor={lightTheme.color_primary_1}
                textColor={lightTheme.color_ui_text_contrast}
                bRadius="4px"
                isLink={true}
                href={`/auth/signin?p=${ router.asPath }`}
              >
              Signin
              </Button>
            </ButtonWrapper>
          )
      }
    </Aside>
  );
};
