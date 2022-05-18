import { useState } from 'react';

import { useReviews } from 'hooks';

import { Modal, Pagination, Spinner, ReviewForm } from 'components/ui';
import { ReviewsList } from './ReviewsList';
import { Header } from './Header';

import { SpinnerWrapper, Div } from './styles';
import { lightTheme } from 'styles';

interface Props { product_id: string; }

export const Reviews = ({ product_id }: Props) => {

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPageSize, setLimitPageSize] = useState(5);
  const [isModalOpen, setModalOpen] = useState(false);
  const { reviews, isLoading, totalReviews } = useReviews(product_id, limitPageSize, offset);

  const handlePageClick = (pageNumber: number) => {
    if (isLoading) return;
    const newOffset = ((pageNumber - 1) * limitPageSize) % totalReviews;
    setCurrentPage(pageNumber);
    setOffset(newOffset);
  };

  return (
    <>
      <div>
        <Header
          product_id={product_id}
          totalLenReviews={totalReviews}
          handleReviewModalOpen={setModalOpen}
          handleItemsPerPage={setLimitPageSize}
        />
        {
          isLoading
            ? <SpinnerWrapper><Spinner color={lightTheme.color_primary_0}/></SpinnerWrapper>
            : (
              reviews?.length === 0
                ? (
                  <Div>
                    This product don&apos;t have any reviews yet.
                  </Div>
                )
                : <ReviewsList reviews={reviews!} />
            )
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
      </div>
      {
        isModalOpen
        &&
        <Modal
          align="center"
          justify="center"
          handleCloseChildren={() => setModalOpen(false)}
        >
          <ReviewForm
            product_id={product_id}
            handleModalOpen={setModalOpen}
          />  
        </Modal>
      }
    </>
  );
};
