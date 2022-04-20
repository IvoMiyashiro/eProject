import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AuthContext } from 'context';

import { ArrowRightIcon } from 'components/icons'; 

import { A, Div, Ul, Li, Span, Wrapper, ImageWrapper, Section, H2, P, Role, Dashboard } from './styles';

interface Props {
  image: string;
  email: string;
  name: string;
  role: string;
}

export const UserDropdown = ({ image, email, name, role }: Props) => {

  const { signout } = useContext(AuthContext);

  return (
    <Div>
      <Ul>
        <Li>
          <Wrapper>
            <ImageWrapper>
              <Image
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
            <Section>
              <H2>{ name }</H2>
              <Role>{ role }</Role>
              <P>{ email }</P>
            </Section>
          </Wrapper>
        </Li>
        <Li>
          <Link href="/profile" passHref>
            <A>
              <Span> My Orders </Span>
              <ArrowRightIcon width="22px" height="22px" color="#fff" />
            </A>
          </Link>
        </Li>
        <Li>
          <Link href="/profile" passHref>
            <A>
              <Span> My Reviews </Span>
              <ArrowRightIcon width="22px" height="22px" color="#fff" />
            </A>
          </Link>
        </Li>
        <Li>
          <Link href="/profile" passHref>
            <A>
              <Span> My Profile </Span>
              <ArrowRightIcon width="22px" height="22px" color="#fff" />
            </A>
          </Link>
        </Li>
        {
          role === 'admin'
          &&
          <Dashboard>
            <Link href="/profile" passHref>
              <A>
                <Span> Dashboard </Span>
                <ArrowRightIcon width="22px" height="22px" color="#fff" />
              </A>
            </Link>
          </Dashboard>
        }
        <Li onClick={signout}>
          <Link href="/profile" passHref>
            <A>
              <Span> Log out </Span>
            </A>
          </Link>
        </Li>
      </Ul>
    </Div>
  );
};
