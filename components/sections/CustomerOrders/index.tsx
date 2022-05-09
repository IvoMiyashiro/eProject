import { useState } from 'react';
import { useCustomerOrders } from 'hooks';

import { MapLinks, SideInfoCard, CustomerOrdesTable, Pagination } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper } from '../Catalog/styles';
import { P, PaginationWrapper } from './styles';

export const UserOrders = () => {

  const [limitPageSize, setLimitPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { orders, totalOrders, isLoading } = useCustomerOrders(limitPageSize, offset);

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
        <Wrapper>
          <Header />
          <CustomerOrdesTable
            orders={orders}
            isLoading={isLoading}
          />
          <PaginationWrapper>
            <P>
              Orders: { offset === 0 ? 1 : offset } - { currentPage * limitPageSize > totalOrders ? totalOrders :  currentPage * limitPageSize } of { totalOrders }
            </P>
            <Pagination
              currentPage={currentPage}
              totalCount={totalOrders}
              pageSize={limitPageSize}
              onPageChange={handlePageClick}
            />
          </PaginationWrapper>
        </Wrapper>
      </Div>
    </>
  );
};

