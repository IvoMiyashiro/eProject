import { useContext } from 'react';
import Link from 'next/link';

import { UiContext } from 'context';

import { Searchbar } from '../Searchbar';
import { CartIcon, CategoryIcon, CraftIcon, DarkModeIcon, HomeIcon, InfoIcon, TagIcon } from 'components/icons';

import { Section, Ul, Li, P, Wrapper } from './styles';

export const LinksList = () => {

  const { toggleCartMenu } = useContext(UiContext);

  return (
    <>
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
            <Wrapper>
              <CategoryIcon width="30px" height="25px" />
              <P>Categories</P>
            </Wrapper>
          </Li>
          <Li>
            <Link href="/products" passHref>
              <Wrapper>
                <TagIcon width="30px" height="25px" />
                <P>Products</P>
              </Wrapper>
            </Link>
          </Li>
          <Li>
            <Link href="/pc-builder" passHref>
              <Wrapper>
                <CraftIcon width="30px" height="25px" />
                <P>PC Builder</P>
              </Wrapper>
            </Link>
          </Li>
          <Li>
            <Link href="/about" passHref>
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
    </>
  );
};
