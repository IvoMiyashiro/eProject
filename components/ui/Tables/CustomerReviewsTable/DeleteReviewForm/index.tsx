import { useContext, useState } from 'react';

import { CustomerReviewsContext } from 'context';
import { Button, Spinner } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, Form, H2, P, Section } from './styles';

interface Props {
  review_id: string;
  product_id: string;
  handleDeleteModalOpen: (value: boolean) => void;
  handleReviewModalOpen: (value: boolean) => void;
}

export const DeleteReviewForm = ({ review_id, product_id, handleDeleteModalOpen, handleReviewModalOpen }: Props) => {

  const [isLoading, setLoading] = useState(false);
  const { deleteReview } = useContext(CustomerReviewsContext);
 
  const handleDeleteReview = async () => {
    setLoading(true);
    await deleteReview(product_id, review_id);
    handleDeleteModalOpen(false);
    handleReviewModalOpen(false);
    setLoading(false);
  };

  return (
    <Form>
      <H2>Delete review?</H2>
      <P>If you delete this review no one will be able to read it again. Are you sure you want to do it?</P>
      <Section>
        <Div>
          <Button
            bRadius='4px'
            textColor={lightTheme.color_ui_text_contrast}
            bgColor={lightTheme.color_ui_danger}
            onClick={handleDeleteReview}
          >
            {
              isLoading
                ? <Spinner size="14px" color={lightTheme.color_ui_text_contrast}/>
                : 'Confirm'
            }
          </Button>
        </Div>
        <Div>
          <Button
            bRadius='4px'
            textColor={lightTheme.color_ui_text_main}
            bgColor={lightTheme.color_neutral_1}
            onClick={() => handleDeleteModalOpen(false)}
          >
            Cancel
          </Button>
        </Div>
      </Section>
    </Form>
  );
};
