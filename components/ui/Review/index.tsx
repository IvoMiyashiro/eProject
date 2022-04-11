import { IReviews } from 'interfaces';
import { Customer, ReviewInfo, LikeDislikeButtons } from './components';

import { Div, Wrapper } from './styles';

interface Props {
  review: IReviews;
}

export const Review = ({ review }: Props) => {

  return (
    <>
      <Div>
        <Wrapper>
          <Customer customer_username={ review.username } customer_profile_image={ review.profile_image }/>
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
          <LikeDislikeButtons 
            likes={ review.likes }
            dislikes={ review.dislikes }
          />
        </Wrapper>
      </Div>
    </>
  );
};
