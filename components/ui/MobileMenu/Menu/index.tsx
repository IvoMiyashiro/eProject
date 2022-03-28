import Link from 'next/link';
import { HomeIcon } from 'components/icons';

import { Div, Section, Ul, Li, P, Wrapper } from './styles';

interface Props {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: Props) => {
  return (
    <Div isOpen={isMenuOpen}>
      <Section>

      </Section>
      <Section>
        <Ul>
          <Li>
            <Link href="/home" passHref>
              <Wrapper>
                <HomeIcon />
                <P>Home</P>
              </Wrapper>
            </Link>
          </Li>
        </Ul>
      </Section>
      <Section>
        <Ul>
          <Li></Li>
        </Ul>
      </Section>
    </Div>
  );
};
