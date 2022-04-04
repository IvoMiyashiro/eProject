import { StarEmptyIcon, StarFillIcon, StarHalfIcon } from 'components/icons';
import styled from 'styled-components';

interface Props {
  rating: number;
}

export const Rating = ({ rating }: Props) => {
  return (
    <Div>
      {
        (rating == 1)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
      {
        (rating < 2 && rating > 1)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarHalfIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
      {
        (rating == 2)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
      {
        (rating < 3 && rating > 2)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarHalfIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
      {
        (rating == 3)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
      {
        (rating < 4 && rating > 3)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarHalfIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
      {
        (rating == 4)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarHalfIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarEmptyIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
      {
        (rating < 5 && rating > 4)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarHalfIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
      {
        (rating == 5)
        &&
        <>
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
          <StarFillIcon 
            width="14px"
            height="14px"
            color="#F9D71C"
          />
        </>
      }
    </Div>
  );
};

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
`;