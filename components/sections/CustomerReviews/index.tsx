import { useState } from 'react';

import { useCustomerReviews } from 'hooks';

import { MapLinks, Pagination, SideInfoCard, CustomerReviewsTable } from 'components/ui';
import { Header } from './Header';

import { Wrapper } from '../Catalog/styles';
import { Div, Section, P, TextWrapper } from '../CustomerOrders/styles';

export const CustomerReviews = () => {  
  const [limitPageSize, setLimitPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { reviews, totalReviews, isLoading } = useCustomerReviews(undefined, limitPageSize, offset);
  
  const links = [{
    name: 'Home',
    link: '/'
  },{
    name: 'My reviews',
    link: '/reviews'
  }];

  const handlePageClick = (pageNumber: number) => {
    if (isLoading) return;
    const newOffset = ((pageNumber - 1) * limitPageSize) % totalReviews;
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
            content="In this section you can see all the information about your reviews."
          />
        </Wrapper>
        <Section>
          <Header
            handleLimitPage={setLimitPageSize}
          /> 
          <CustomerReviewsTable
            reviews={reviews}
            isLoading={isLoading}
          />
          {
            (reviews.length === 0 && isLoading !== true)
            &&
            <TextWrapper>
              <P>
                We could&#39;t find any reviews yet.
              </P>
            </TextWrapper>
          }
          <Pagination
            name="Reviews"
            limit={limitPageSize}
            offset={offset}
            currentPage={currentPage}
            totalCount={totalReviews}
            pageSize={limitPageSize}
            onPageChange={handlePageClick}
          />
        </Section>
      </Div>
    </>
  );
};
