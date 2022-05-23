import { useContext, useState } from 'react';
import Image from 'next/image';

import { AuthContext } from 'context';

import { CheckIcon } from 'components/icons';
import { Button, Spinner } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, ImageWrapper, Wrapper, H2, Section, Span, P, ButtonWrapper, CustomerContainer } from './styles';

interface Props { 
  review_id: string;
  product_id: string;
  customer_id: string;
  username: string; 
  profileImg: string;
  handleDeleteReview: (deleteData: {product_id: string; review_id: string}) => Promise<void>;
}

export const Customer = ({
  review_id,
  product_id,
  customer_id,
  username,
  profileImg,
  handleDeleteReview 
}: Props) => {

  const USER_PROFILE_IMAGE = !!profileImg ? profileImg : '/images/profile_image.png';
  const { customer } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

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
            onClick={async () => {setLoading(true); await handleDeleteReview({ product_id, review_id });}}
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
