import { useContext } from 'react';
import Link from 'next/link';

import { AuthContext, UiContext } from 'context';
import { Searchbar } from '../Searchbar';
import { Logo, Button, CustomerCard } from 'components/ui';
import { CartIcon, CraftIcon, DarkModeIcon, HomeIcon, InfoIcon, TagIcon } from 'components/icons';

import { Aside, Section, Ul, Li, P, Wrapper, ButtonWrapper, CustomerCardWrapper } from './styles';
import { lightTheme } from 'styles';

interface Props {
  isMenuOpen: boolean;
}

export const AsideMobileMenu = ({ isMenuOpen }: Props) => {

  const { toggleCartMenu } = useContext(UiContext);
  const { customer, isLoggedIn } = useContext(AuthContext);

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
      <Section>
        <Ul>
          <Li>
            <Searchbar />
          </Li>
          <Li>
            <Link href="/" passHref>
              <Wrapper>
                <HomeIcon width="30px" height="25px" />
                <P>Home</P>
              </Wrapper>
            </Link>
          </Li>
          <Li>
            <Link href="/home" passHref>
              <Wrapper>
                <TagIcon width="30px" height="25px" />
                <P>Categories</P>
              </Wrapper>
            </Link>
          </Li>
          <Li>
            <Link href="/home" passHref>
              <Wrapper>
                <CraftIcon width="30px" height="25px" />
                <P>PC Builder</P>
              </Wrapper>
            </Link>
          </Li>
          <Li>
            <Link href="/home" passHref>
              <Wrapper>
                <InfoIcon width="30px" height="25px" />
                <P>About</P>
              </Wrapper>
            </Link>
          </Li>
        </Ul>
      </Section>
      <Section>
        <Ul>
          <Li onClick={toggleCartMenu}>
            <Wrapper>
              <CartIcon width="30px" height="25px" />
              <P>Cart</P>
            </Wrapper>
          </Li>
          <Li>
            <Wrapper>
              <DarkModeIcon width="30px" height="25px" />
              <P>Theme</P>
            </Wrapper>
          </Li>
        </Ul>
      </Section>
      {
        isLoggedIn
          ? (
            <CustomerCardWrapper>
              <CustomerCard
                image={customer!.profile_image}
                email={customer!.email}
                name={customer!.name}
                role={customer!.role} 
              />
            </CustomerCardWrapper>
          )
          : (
            <ButtonWrapper>
              <Button
                bgColor={lightTheme.color_primary_1}
                textColor={lightTheme.color_ui_text_contrast}
                bRadius="4px"
              >
              Signin
              </Button>
            </ButtonWrapper>
          )
      }
    </Aside>
  );
};
