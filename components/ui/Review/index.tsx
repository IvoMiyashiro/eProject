import { IReviews } from 'interfaces';
import { Customer } from './Customer';
import { ReviewInfo } from './ReviewInfo';
import { LikeDislikeButtons } from './LikeDislikeButtons';

import { Div, Wrapper } from './styles';

interface Props { review: IReviews; }

export const Review = ({ review }: Props) => {
  return (
    <Div>
      <Wrapper>
        <Customer username={ review.name! } profileImg={ review.profile_image! } />
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
