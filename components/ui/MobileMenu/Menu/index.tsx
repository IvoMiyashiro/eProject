import Link from 'next/link';

import { Logo, Button } from 'components/ui';
import { Searchbar } from '../Searchbar';

import { BlogIcon, CartIcon, CraftIcon, DarkModeIcon, HomeIcon, InfoIcon, TagIcon } from 'components/icons';
import { Div, Section, Ul, Li, P, Wrapper, ButtonWrapper } from './styles';
import { lightTheme } from 'styles';

interface Props {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: Props) => {
  return (
    <Div isOpen={isMenuOpen}>
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
          <Li>
            <Link href="/home" passHref>
              <Wrapper>
                <BlogIcon width="30px" height="25px" />
                <P>Blog</P>
              </Wrapper>
            </Link>
          </Li>
        </Ul>
      </Section>
      <Section>
        <Ul>
          <Li>
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
      <ButtonWrapper>
        <Button
          bgColor={lightTheme.color_tertiary_0}
          textColor={lightTheme.color_primary_0}
          bRadius="4px"
        >
          Signin
        </Button>
      </ButtonWrapper>
    </Div>
  );
};
