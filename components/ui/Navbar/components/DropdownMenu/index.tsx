import Link from 'next/link';

import { ArrowRightIcon } from 'components/icons';
import { SubDropdownMenu } from '../SubDropdownMenu';

import { Div, Li, P, Section, Ul, Wrapper } from './styles';

export const DropdownMenu = () => {
  return (
    <Wrapper>
      <Ul>
        <Li>
          <Link href="/products?categories=Motherboard&stock=false&search=" passHref>
            <Div>
              <Section>
                <P>Motherboards</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/products?categories=CPU+%2F+Processors&stock=false&search=" passHref>
            <Div>
              <Section>
                <P>CPUs / Processors</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/products?categories=Video+Cards&stock=false&search=" passHref>
            <Div>
              <Section>
                <P>Video Cards</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/products?categories=Memory&stock=false&search=" passHref>
            <Div>
              <Section>
                <P>Memory</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/products?categories=CPU+Cooler&stock=false&search=" passHref>
            <Div>
              <Section>
                <P>Fans & PC Cooling</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/products?categories=Case&stock=false&search=" passHref>
            <Div>
              <Section>
                <P>Case</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/products?categories=Power+Supply&stock=false&search=" passHref>
            <Div>
              <Section>
                <P>Power Supply</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link href="/products?categories=Storage&stock=false&search=" passHref>
            <Div>
              <Section>
                <P>Storage</P>
                <ArrowRightIcon width="18px" height="18px" />
              </Section>
            </Div>
          </Link>
        </Li>
      </Ul>
    </Wrapper>
  );
};

