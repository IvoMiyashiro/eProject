import { useContext, useState } from 'react';

import { CustomerReviewsContext } from 'context';
import { MapLinks, Pagination, SideInfoCard, CustomerReviewsTable } from 'components/ui';
import { Header } from './Header';

import { Wrapper } from '../Catalog/styles';
import { Div, Section, P, TextWrapper } from '../CustomerOrders/styles';

export const CustomerReviews = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const { 
    reviewsList,
    totalReviewsLength,
    isLoading,
    offset,
    limitPerPage,
    changeOffset 
  } = useContext(CustomerReviewsContext);
  
  const links = [{
    name: 'Home',
    link: '/'
  },{
    name: 'My reviews',
    link: '/reviews'
  }];

  const handlePageClick = (pageNumber: number) => {
    if (isLoading) return;
    const newOffset = ((pageNumber - 1) * limitPerPage) % totalReviewsLength;
    setCurrentPage(pageNumber);
    changeOffset(newOffset);
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
          <Header /> 
          <CustomerReviewsTable
            reviews={reviewsList}
            isLoading={isLoading}
          />
          {
            (reviewsList?.length === 0 && isLoading === false)
            &&
            <TextWrapper>
              <P>
                We could&#39;t find any reviews yet.
              </P>
            </TextWrapper>
          }
          <Pagination
            name="Reviews"
            offset={offset}
            currentPage={currentPage}
            totalCount={totalReviewsLength}
            pageSize={limitPerPage}
            onPageChange={handlePageClick}
          />
        </Section>
      </Div>
    </>
  );
};
