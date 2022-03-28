import Link from 'next/link';

import { LogoIcon } from 'components/icons/Logo';

import styled from 'styled-components';

interface Props {
  isLink: boolean;
  logoColor: string;
  textColor: string;
}

export const Logo = ({ isLink, logoColor, textColor }: Props) => {
  return (
    <>
      {
        isLink
          ? (
            <Link href={'/home'} passHref>
              <Div>
                <LogoIcon width="40px" height="40px" color={logoColor} />
                <H2 color={textColor}>eProject</H2>
              </Div>
            </Link>
          )
          : (
            <Div>
              <LogoIcon width="40px" height="40px" color={logoColor} />
              <H2 color={textColor}>eProject</H2>
            </Div>
          )
      }
    </>
  );
};

const Div = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5em;
  cursor: pointer;
`;
  
const H2 = styled.h2`
  color: ${props => props.color};
`;
