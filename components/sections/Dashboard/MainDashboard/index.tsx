import { AnalyticsCards } from './AnalyticsCards';
import { TopProducts } from './TopProducts';
import { TopCustomers } from './TopCustomers';

import { Div } from './styles';


export const MainDashboard = () => {



  return (
    <>
      <AnalyticsCards />
      <Div>
        <TopProducts />
        <TopCustomers />
      </Div>
    </>
  );
};
