import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IReviews } from 'interfaces';
import { Review } from 'components/ui';

interface Props { reviews: IReviews[]; handleReviewsList: Dispatch<SetStateAction<IReviews[] | []>>}

export const ReviewsList = ({ reviews, handleReviewsList }: Props) => {
  return (
    <Div>
      {
        reviews?.map(review => {
          return <Review key={review.id} review={review} handleReviewsList={handleReviewsList}/>;
        })
      }
    </Div>

  );
};

const Div = styled.div`
  margin-top: 3em;
`;
