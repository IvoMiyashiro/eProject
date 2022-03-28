import Link from 'next/link';

import { ArrowDownIcon } from 'components/icons';
import { Logo } from '../Logo';
import { ActionButtons } from './ActionButtons';
import { Searchbar } from './Searchbar';
import { DropdownMenu } from './DropdownMenu';

import { DefaultTheme } from 'styled-components';
import { lightTheme } from 'styles';
import { Div, Dropdown, Header, Li, Nav, P, Section, Ul, Wrapper } from './styles';

interface Props {
  handleAppTheme: (theme: DefaultTheme) => void;
}

export const Navbar = ({ handleAppTheme }: Props) => {
  return (
    <Nav>
      <Div>
        <Wrapper>
          <Section>
            <Logo
              isLink={true}
              textColor="#ffffff"
              logoColor={lightTheme.color_tertiary_0}
            />
            <Searchbar />
          </Section>
          <Section>
            <ActionButtons handleAppTheme={handleAppTheme} />
          </Section>
        </Wrapper>
      </Div>
      <Div>
        <Ul>
          <Li>
            <Link href='/' passHref>
              <P>Home</P>
            </Link>
          </Li>
          <Li>
            <Link href='/' passHref>
              <Dropdown>
                <Header>
                  <P>Categories</P>
                  <ArrowDownIcon width="20px" height="20px" />
                </Header>
                <DropdownMenu />
              </Dropdown>
            </Link>
          </Li>
          <Li>
            <Link href='/' passHref>
              <P>PC Builder</P>
            </Link>
          </Li>
          <Li>
            <Link href='/' passHref>
              <P>About</P>
            </Link>
          </Li>
          <Li>
            <Link href='/' passHref>
              <P>Blog</P>
            </Link>
          </Li>
        </Ul>
      </Div>
    </Nav>
  );
};
