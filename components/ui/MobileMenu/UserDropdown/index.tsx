import { useContext, useState } from 'react';
import Link from 'next/link';

import { AuthContext } from 'context';
import { CustomerCard } from 'components/ui/';
import { ArrowRightIcon } from 'components/icons';

import { Div, Ul, Li, CustomerCardWrapper, A, Span, Dashboard } from './styles';

export const UserDropdown = () => {

  const { customer, signout } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <Div>
      <Ul isOpen={isOpen}>
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
          customer!.role === 'admin'
          &&
          <Dashboard>
            <Link href="/dashboard" passHref>
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
      <CustomerCardWrapper isOpen={isOpen} onClick={() => setOpen(prev => !prev)}>
        <CustomerCard
          image={customer!.profile_image}
          email={customer!.email}
          name={customer!.name}
          role={customer!.role} 
        />
      </CustomerCardWrapper>
    </Div>
  );
};
