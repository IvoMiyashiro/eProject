import { Dispatch, SetStateAction, useContext } from 'react';

import { useRouter } from 'next/router';

import { EditIcon, EyeIcon } from 'components/icons';
import { Button, InputSelectIcon } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, Wrapper, Span, P } from './styles';
import { AuthContext } from 'context';

interface Props {
  product_id: string;
  totalLenReviews: number;
  handleReviewModalOpen: Dispatch<SetStateAction<boolean>>;
  handleItemsPerPage: Dispatch<SetStateAction<number>>;
}

export const Header = ({ product_id, totalLenReviews, handleItemsPerPage, handleReviewModalOpen }: Props) => {

  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  const handleWriteReview = () => {
    if (isLoggedIn) return handleReviewModalOpen(true);
    router.push(`/auth/signin?p=/products/${product_id}`);
  };

  return (
    <Div>
      <Wrapper>
        <Button
          width="150px"
          height="39px"
          bgColor={lightTheme.color_primary_2}
          bRadius="4px"
          textColor="white"
          onClick={handleWriteReview}
        >
          <>
            <EditIcon width="22px" height="22px" />
            <Span>Write a review</Span>
          </>
        </Button>
        <InputSelectIcon
          icon={EyeIcon}
          values={['5', '10', '15']}
          name=""
          onChange={handleItemsPerPage}
        />
      </Wrapper>
      <P>{ !!totalLenReviews ? totalLenReviews : '0' } reviews found</P>
    </Div>
  );
};
