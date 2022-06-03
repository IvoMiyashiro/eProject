import { useCustomersOrders } from 'hooks';

import { CustomerOrdersTable } from 'components/ui';
import { AnalyticsCards } from './AnalyticsCards';
import { TopProducts } from './TopProducts';
import { TopCustomers } from './TopCustomers';

import { Div, H2 } from './styles';


export const MainDashboard = () => {

  const limit = 5;
  const offset = undefined;
  const searchOrder = '';

  const { orders, isLoading } = useCustomersOrders({
    limit,
    offset,
    searchOrder
  });

  return (
    <>
      <AnalyticsCards />
      <Div>
        <TopProducts />
        <TopCustomers />
      </Div>
      <div>
        <H2>Last orders.</H2>
        <CustomerOrdersTable
          orders={orders}
          isLoading={isLoading}
          rowLink
        />
      </div>
    </>
  );
};
