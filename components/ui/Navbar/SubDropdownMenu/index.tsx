import Link from 'next/link';

import { Ul, Wrapper, Li, P } from './styles';

export const SubDropdownMenu = () => {
  return (
    <Wrapper>
      <Ul>
        <Li>
          <Link href="/" passHref>
            <P>AMD</P>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <P>Intel</P>
          </Link>
        </Li>
      </Ul>
    </Wrapper>
  );
};
