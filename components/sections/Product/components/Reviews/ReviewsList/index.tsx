import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

import { IReviews } from 'interfaces';
import { Review } from 'components/ui';

interface Props { 
  reviews: IReviews[];
  offset: number;
  totalLenReviews: number;
  limit: number;
  handlePageCount: Dispatch<SetStateAction<number>>
}

export const ReviewsList = ({ reviews, offset, totalLenReviews, limit, handlePageCount }: Props) => {

  const [currentItems, setCurrentItems] = useState<IReviews[] | null>(null);

  useEffect(() => {
    setCurrentItems(reviews);
    handlePageCount(Math.ceil(totalLenReviews / limit));
  }, [offset, reviews, totalLenReviews, limit, handlePageCount]);

  return (
    <Div>
      {
        currentItems?.map(review => {
          return <Review key={review.id} review={review} />;
        })
      }
    </Div>

  );
};

const Div = styled.div`
  margin-top: 3em;
`;
