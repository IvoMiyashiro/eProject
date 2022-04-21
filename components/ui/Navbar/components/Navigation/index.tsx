import Link from 'next/link';

import { DropdownMenu } from '../DropdownMenu';

import { ArrowDownIcon } from 'components/icons';
import { Div, Ul, Li, P, Dropdown, Header } from './styles';

interface Props {
  isVisible: boolean
}

export const Navigation = ({ isVisible }: Props) => {
  return (
    <Div isVisible={isVisible}>
      <Ul>
        <Li>
          <Link href='/' passHref>
            <P>Home</P>
          </Link>
        </Li>
        <Li>
          <Dropdown>
            <Header>
              <P>Categories</P>
              <ArrowDownIcon width="20px" height="20px" />
            </Header>
            <DropdownMenu />
          </Dropdown>
        </Li>
        <Li>
          <Link href='/products' passHref>
            <P>Products</P>
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
      </Ul>
    </Div>
  );
};
