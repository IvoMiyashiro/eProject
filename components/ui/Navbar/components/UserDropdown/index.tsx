import { useContext } from 'react';
import Link from 'next/link';

import { AuthContext } from 'context';

import { ArrowRightIcon } from 'components/icons'; 

import { A, Div, Ul, Li, Span, Dashboard } from './styles';
import { CustomerCard } from 'components/ui/CustomerCard';

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
          <CustomerCard 
            image={image}
            email={email}
            name={name}
            role={role}
          />
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
          <A>
            <Span> Log out </Span>
          </A>
        </Li>
      </Ul>
    </Div>
  );
};
