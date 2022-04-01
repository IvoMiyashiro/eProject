import Link from 'next/link';

import { ArrowRightIcon } from 'components/icons';
import { SubDropdownMenu } from '../SubDropdownMenu';

import { Div, Li, P, Section, Ul, Wrapper } from './styles';

export const DropdownMenu = () => {
  return (
    <Wrapper>
      <Ul>
        <Li>
          <Link href="/" passHref>
            <Div>
              <Section>
                <P>Motherboards</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
              <SubDropdownMenu />
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <Div>
              <Section>
                <P>CPUs / Processors</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
              <SubDropdownMenu />
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <Div>
              <Section>
                <P>Video Cards</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
              <SubDropdownMenu />
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <Div>
              <Section>
                <P>Memory</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
              <SubDropdownMenu />
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <Div>
              <Section>
                <P>Fans & PC Cooling</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
              <SubDropdownMenu />
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <Div>
              <Section>
                <P>Monitors</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
              <SubDropdownMenu />
            </Div>
          </Link>
        </Li>
      </Ul>
    </Wrapper>
  );
};

