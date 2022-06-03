import { useState } from 'react';
import { useCustomerOrders } from 'hooks';

import { MapLinks, SideInfoCard, CustomerOrdersTable, Pagination } from 'components/ui';
import { Header } from './Header';

import { Wrapper } from '../Catalog/styles';
import { Div, Section, P, TextWrapper } from './styles';

export const CustomerOrders = () => {

  const [limitPageSize, setLimitPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchOrder, setSearchOrder] = useState('');
  const [offset, setOffset] = useState(0);
  const { orders, totalOrders, isLoading } = useCustomerOrders(
    limitPageSize,
    offset,
    searchOrder
  );

  const links = [{
    name: 'Home',
    link: '/'
  },{
    name: 'My orders',
    link: '/orders'
  }];

  const handlePageClick = (pageNumber: number) => {
    if (isLoading) return;
    const newOffset = ((pageNumber - 1) * limitPageSize) % totalOrders;
    setCurrentPage(pageNumber);
    setOffset(newOffset);
  };

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
        <Section>
          <Header
            handleSearchOrders={setSearchOrder}
            handleLimitPage={setLimitPageSize}
          /> 
          <CustomerOrdersTable
            orders={orders}
            isLoading={isLoading}
          />
          {
            (orders.length === 0 && isLoading !== true)
            &&
            <TextWrapper>
              <P>
                We did not find the order #{ searchOrder } 
              </P>
            </TextWrapper>
          }
          <Pagination
            name="Orders"
            limit={limitPageSize}
            offset={offset}
            currentPage={currentPage}
            totalCount={totalOrders}
            pageSize={limitPageSize}
            onPageChange={handlePageClick}
          />
        </Section>
      </Div>
    </>
  );
};

