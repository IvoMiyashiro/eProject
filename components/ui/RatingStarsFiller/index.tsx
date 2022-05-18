import { useState } from 'react';
import styled from 'styled-components';
import { StarEmptyIcon, StarFillIcon } from 'components/icons';

interface Props {
  rating: number;
  isRatingSelected: boolean;
  handleRating: (value: number) => void;
  handleRatingSelected: (value: boolean) => void;
  handleRatingError: (value: string) => void; 
}

export const RatingStarsFiller = ({ rating, isRatingSelected, handleRating, handleRatingSelected, handleRatingError }: Props) => {

  const [starOneFill, setStarOneFill] = useState(false);
  const [starTwoFill, setStarTwoFill] = useState(false);
  const [starThreeFill, setStarThreeFill] = useState(false);
  const [starFourFill, setStarFourFill] = useState(false);
  const [starFiveFill, setStarFiveFill] = useState(false);

  const handleMouseLeave = (starNumber: number) => {
    if (isRatingSelected) return;

    if (starNumber === 1) {
      setStarOneFill(false);
      setStarTwoFill(false);
      setStarThreeFill(false);
      setStarFourFill(false);
      setStarFiveFill(false);
      
    }

    if (starNumber === 2) {
      setStarOneFill(false);
      setStarTwoFill(false);
      setStarThreeFill(false);
      setStarFourFill(false);
      setStarFiveFill(false);
    }

    if (starNumber === 3) {
      setStarOneFill(false);
      setStarTwoFill(false);
      setStarThreeFill(false);
      setStarFourFill(false);
      setStarFiveFill(false);
    }

    if (starNumber === 4) {
      setStarOneFill(false);
      setStarTwoFill(false);
      setStarThreeFill(false);
      setStarFourFill(false);
      setStarFiveFill(false);
    }

    if (starNumber === 5) {
      setStarOneFill(false);
      setStarTwoFill(false);
      setStarThreeFill(false);
      setStarFourFill(false);
      setStarFiveFill(false);
    }
  };

  const handleClick = (starNumber: number) => {
    handleRatingError('');
    if (starNumber === 1) {
      setStarOneFill(true);
      setStarTwoFill(false);
      setStarThreeFill(false);
      setStarFourFill(false);
      setStarFiveFill(false);
      handleRatingSelected(true);
      handleRating(1);
    }

    if (starNumber === 2) {
      setStarOneFill(true);
      setStarTwoFill(true);
      setStarThreeFill(false);
      setStarFourFill(false);
      setStarFiveFill(false);
      handleRatingSelected(true);
      handleRating(2);
    }

    if (starNumber === 3) {
      setStarOneFill(true);
      setStarTwoFill(true);
      setStarThreeFill(true);
      setStarFourFill(false);
      setStarFiveFill(false);
      handleRatingSelected(true);
      handleRating(3);
    }

    if (starNumber === 4) {
      setStarOneFill(true);
      setStarTwoFill(true);
      setStarThreeFill(true);
      setStarFourFill(true);
      setStarFiveFill(false);
      handleRatingSelected(true);
      handleRating(4);
    }

    if (starNumber === 5) {
      setStarOneFill(true);
      setStarTwoFill(true);
      setStarThreeFill(true);
      setStarFourFill(true);
      setStarFiveFill(true);
      handleRatingSelected(true);
      handleRating(5);
    }
  };

  return (
    <Div>
      {
        (rating === 1 || starOneFill)
          ? (
            <Wrapper
              onClick={() => handleClick(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <StarFillIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
          : (
            <Wrapper onMouseEnter={() => {setStarOneFill(true);}}>
              <StarEmptyIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
      }
      {
        (rating === 2 || starTwoFill)
          ? (
            <Wrapper
              onClick={() => handleClick(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <StarFillIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
          : (
            <Wrapper onMouseEnter={() => {setStarOneFill(true); setStarTwoFill(true);}}>
              <StarEmptyIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
      }
      {
        (rating === 3 || starThreeFill)
          ? (
            <Wrapper
              onClick={() => handleClick(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              <StarFillIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
          : (
            <Wrapper onMouseEnter={() => {setStarOneFill(true); setStarTwoFill(true); setStarThreeFill(true);}}>
              <StarEmptyIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
      }
      {
        (rating === 4 || starFourFill)
          ? (
            <Wrapper
              onClick={() => handleClick(4)}
              onMouseLeave={() => handleMouseLeave(4)}
            >
              <StarFillIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
          : (
            <Wrapper onMouseEnter={() => {setStarOneFill(true); setStarTwoFill(true); setStarThreeFill(true); setStarFourFill(true);}}>
              <StarEmptyIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
      }
      {
        (rating === 5 || starFiveFill)
          ? (
            <Wrapper
              onClick={() => handleClick(5)}
              onMouseLeave={() => handleMouseLeave(5)}
            >
              <StarFillIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
          : (
            <Wrapper 
              onMouseEnter={() => {setStarOneFill(true); setStarTwoFill(true); setStarThreeFill(true); setStarFourFill(true); setStarFiveFill(true);}}
            >
              <StarEmptyIcon width="26px" height="26px" color="#F9D71C" />
            </Wrapper>
          )
      }
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  gap: 0.25em;
`;

const Wrapper = styled.div`
  cursor: pointer;
`;
