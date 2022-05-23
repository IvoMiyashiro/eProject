import styled from 'styled-components';
import { IReviews } from 'interfaces';
import { Review } from 'components/ui';

interface Props { reviews: IReviews[]; handleDeleteReview: (deleteData: {product_id: string; review_id: string}) => Promise<void>;}

export const ReviewsList = ({ reviews, handleDeleteReview }: Props) => {
  return (
    <Div>
      {
        reviews?.map(review => {
          return (
            <Review
              key={review.id}
              review={review}
              handleDeleteReview={handleDeleteReview}
            />
          );
        })
      }
    </Div>

  );
};

const Div = styled.div`
  margin-top: 3em;
`;
