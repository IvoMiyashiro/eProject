import { Dispatch, SetStateAction, useContext, useState } from 'react';
import Image from 'next/image';

import { IReviews } from 'interfaces';
import { deleteReview } from 'services';

import { CheckIcon } from 'components/icons';
import { Button } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, ImageWrapper, Wrapper, H2, Section, Span, P, ButtonWrapper, CustomerContainer } from './styles';
import { Spinner } from 'components/ui/Spinner';
import { AuthContext } from 'context';

interface Props { 
  review_id: string;
  product_id: string;
  customer_id: string;
  username: string; 
  profileImg: string;
  handleReviewsList: Dispatch<SetStateAction<IReviews[] | []>>
}

export const Customer = ({ review_id,
  product_id,
  customer_id,
  username,
  profileImg,
  handleReviewsList 
}: Props) => {

  const USER_PROFILE_IMAGE = !!profileImg ? profileImg : '/images/profile_image.png';
  const { customer } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

  const handleDeleteReview = async () => {
    setLoading(true);
    await deleteReview(product_id, review_id);
    handleReviewsList(prev => {
      return prev.filter(review => {
        if (review.id !== review_id) return review;
      });
    });
  };

  return (
    <CustomerContainer>
      <Div>
        <ImageWrapper>
          <Image
            alt={ username }
            blurDataURL={ USER_PROFILE_IMAGE as string }
            layout="fill"
            placeholder="blur"
            src={ USER_PROFILE_IMAGE as string }
          />
        </ImageWrapper>
        <Wrapper>
          <H2>{ username } </H2>
          <Section>
            <Span>
              <CheckIcon width="16px" height="16px" />
            </Span>
            <P>Verified Owner</P>
          </Section>
        </Wrapper>
      </Div>
      {
        (customer?.id === customer_id)
        &&
        <ButtonWrapper>
          <Button
            bgColor={lightTheme.color_ui_danger}
            textColor={lightTheme.color_ui_text_contrast}
            bRadius="4px"
            onClick={handleDeleteReview}
          >
            {
              isLoading
                ? <Spinner size="10px" />
                : 'Delete'
            }
          </Button>
        </ButtonWrapper>
      }

    </CustomerContainer>
  );
};
