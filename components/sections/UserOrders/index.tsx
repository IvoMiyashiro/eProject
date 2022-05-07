import { useContext, useEffect, useState } from 'react';

import { AuthContext } from 'context';
import { MapLinks, SideInfoCard, UserOrdersTable } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper } from '../Catalog/styles';
import { getUserOrders } from 'services/getUserOrders';
import { IOrders } from 'interfaces';

export const UserOrders = () => {
  const { customer } = useContext(AuthContext);
  const [orders, setOrders] = useState<[] | IOrders[]>([]);

  const links = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'My orders',
      link: '/orders'
    }
  ];

  useEffect(() => {
    if (customer === undefined) return; 
    getUserOrders(customer.id).then(resp => setOrders(resp)); 
  }, [customer]);

  return (
    <>
      <MapLinks links={links}/>
      <Div>
        <Wrapper>
          <SideInfoCard 
            title="Info."
            content="In this section you can see all the information about your orders, like shipping status, payment status and more."
          />
        </Wrapper>
        <Wrapper>
          <Header />
          <UserOrdersTable 
            orders={orders}
          />
        </Wrapper>
      </Div>
    </>
  );
};

