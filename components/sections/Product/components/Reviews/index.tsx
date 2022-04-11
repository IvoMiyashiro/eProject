import styled from 'styled-components';
import { IReviews } from 'interfaces';
import { Button, Review } from 'components/ui';
import { EditIcon } from 'components/icons';
import { lightTheme } from 'styles';

interface Props {
  reviews: IReviews[];
}

export const Reviews = ({ reviews }: Props) => {
  return (
    <div>
      <Header>
        <Button 
          width="150px"
          height="30px"
          bgColor={lightTheme.color_primary_2}
          bRadius="4px"
          textColor="white"
        >
          <>
            <EditIcon width="22px" height="22px" />
            <Span>Write a review</Span>
          </>
        </Button>
        <P>{ reviews.length } reviews found</P>
      </Header>
      {
        reviews.map(review => {
          return <Review key={review.id} review={review} />;
        })
      }
    </div>
  );
};

const Header = styled.header`
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${props => props.theme.color_neutral_1}; */

  border-radius: 4px;
`;

const P = styled.p`
  /* font-family: 'Inter'; */
  font-size: 0.9rem;
`;

const Span = styled.span`
  margin-left: 0.5em;
`;
