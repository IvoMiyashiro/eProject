import { useState } from 'react';

import { useReviews } from 'hooks';

import { Spinner } from 'components/ui';
import { ReviewsList } from './ReviewsList';
import { Header } from './Header';
import { Pagination } from './Pagination';

import { SpinnerWrapper, Div } from './styles';

interface Props {
  product_id: string;
}

export const Reviews = ({ product_id }: Props) => {

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const { reviews, isLoading, totalLenReviews } = useReviews(product_id, limit, itemOffset);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * limit) % totalLenReviews;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Header
        totalLenReviews={totalLenReviews}
        itemsPerPage={limit}
        handleItemsPerPage={setLimit}
      />
      {
        isLoading
          ? <SpinnerWrapper><Spinner /></SpinnerWrapper>
          : (
            reviews?.length === 0
              ? (
                <Div>
                  This product don&apos;t have any reviews yet.
                </Div>
              )
              : <ReviewsList reviews={reviews!} offset={itemOffset} handlePageCount={setPageCount} totalLenReviews={totalLenReviews} limit={limit}/>
          )
      }
      <Pagination limit={limit} pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
