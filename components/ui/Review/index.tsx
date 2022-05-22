import { IReviews } from 'interfaces';
import { Dispatch, SetStateAction } from 'react';
import { Customer } from './Customer';
import { ReviewInfo } from './ReviewInfo';
import { Div, Wrapper } from './styles';

interface Props { review: IReviews; handleReviewsList: Dispatch<SetStateAction<IReviews[] | []>> }

export const Review = ({ review, handleReviewsList }: Props) => {
  return (
    <Div>
      <Wrapper>
        <Customer
          review_id={review.id}
          product_id={review.product_id}
          customer_id={review.customer_id}
          username={ review.name! }
          profileImg={ review.profile_image! }
          handleReviewsList={handleReviewsList}
        />
      </Wrapper>
      <Wrapper>
        <ReviewInfo
          cons={ review.cons }
          created_at={ review.created_at }
          overall={ review.overall }
          pros={ review.pros }
          rating={ review.rating }
          title={ review.title } 
        />
      </Wrapper>
    </Div>
  );
};
