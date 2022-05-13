import styled from 'styled-components';
import { IReviews } from 'interfaces';
import { Review } from 'components/ui';

interface Props { reviews: IReviews[]; }

export const ReviewsList = ({ reviews }: Props) => {
  return (
    <Div>
      {
        reviews?.map(review => {
          return <Review key={review.id} review={review} />;
        })
      }
    </Div>

  );
};

const Div = styled.div`
  margin-top: 3em;
`;
