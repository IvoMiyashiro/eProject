import { FormEvent, useContext, useEffect, useState } from 'react';

import { ICreateReviewData } from 'interfaces';
import { useProduct } from 'hooks';

import { INPUT_CONTOL_INIT_STATE } from 'helpers/input_control_init_state';

import { AuthContext } from 'context';
import { Spinner, InputTextarea, Button, RatingStarsFiller } from 'components/ui';
import { Header } from './Header';

import { lightTheme } from 'styles';
import { ButtonWrapper, Div, Form, H2, Section, Span, SpinnerWrapper } from './styles';

interface Props {
  product_id: string;
  handleModalOpen: (value: boolean) => void ;
  handleAddReview: (reviewData: ICreateReviewData) => Promise<void>;
}

export const ReviewForm = ({ product_id, handleModalOpen, handleAddReview }: Props) => {

  const { customer } = useContext(AuthContext);
  const { product, isLoading } = useProduct(product_id);

  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [isRatingSelected, setRatingSelected] = useState(false);
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState('');
  const [prosInputControl, setProsInputControl] = useState(INPUT_CONTOL_INIT_STATE);
  const [consInputControl, setConsInputControl] = useState(INPUT_CONTOL_INIT_STATE);
  const [overallInputControl, setOverallInputControl] = useState(INPUT_CONTOL_INIT_STATE);
  
  useEffect(() => {
    if (!prosInputControl.hasError && !consInputControl.hasError && !overallInputControl.hasError && ratingError === '') {
      setValidForm(true);
    }
  }, [prosInputControl.hasError, consInputControl.hasError, overallInputControl.hasError, ratingError]);

  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    
    if (prosInputControl.value.length === 0) {
      setProsInputControl({
        ...prosInputControl,
        hasError: true,
        errorMsj: '* Pros must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (consInputControl.value.length === 0) {
      setConsInputControl({
        ...consInputControl,
        hasError: true,
        errorMsj: '* Cons must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (overallInputControl.value.length === 0) {
      setOverallInputControl({
        ...overallInputControl,
        hasError: true,
        errorMsj: '* Overall must be filled.'
      });
      valid = false;
      setValidForm(false);
    }

    if (rating === 0) {
      setRatingError('* Rating must be selected.');
      valid = false;
      setValidForm(false);
    }

    if (!valid) return;

    setSubmitLoading(true);
    handleAddReview({
      product_id,
      customer_id: customer?.id,
      rating,
      pros: prosInputControl.value,
      cons: consInputControl.value,
      overall: overallInputControl.value,
    });
    setSubmitLoading(false);
    handleModalOpen(false);
  };

  return (
    <Form onSubmit={ handleSubmit }>
      {
        isLoading
          ? (
            <SpinnerWrapper>
              <Spinner 
                color={lightTheme.color_primary_0}
                size="22px"
              />
            </SpinnerWrapper>
          )
          : (
            <>
              <Header 
                product_id={product_id}
                brand={product!.brand}
                image={product!.image_urls[0]}
                title={product!.title}
              />
              <Div>
                <Section>
                  <H2>Select a rating</H2>
                  <RatingStarsFiller
                    rating={rating}
                    isRatingSelected={isRatingSelected}
                    handleRating={setRating}
                    handleRatingSelected={setRatingSelected}
                    handleRatingError={setRatingError}
                  />
                  <Span>{ ratingError }</Span>
                </Section>
                <InputTextarea
                  placeholder="Pros"
                  state={prosInputControl}
                  handleStateValue={setProsInputControl}
                />
                <InputTextarea
                  placeholder="Cons"
                  state={consInputControl}
                  handleStateValue={setConsInputControl}
                />
                <InputTextarea
                  placeholder="Overall"
                  state={overallInputControl}
                  handleStateValue={setOverallInputControl}
                />
              </Div>
              <ButtonWrapper>
                <Button
                  bRadius='4px'
                  bgColor={lightTheme.color_primary_0}
                  textColor={lightTheme.color_ui_text_contrast}
                  type="submit"
                  disabled={isValidForm ? false : true}
                >
                  {
                    isSubmitLoading
                      ? <Spinner size="16px" color={lightTheme.color_ui_text_contrast} />
                      : 'Confirm'
                  }
                </Button>
              </ButtonWrapper>
            </>
          )
      }
    </Form>
  );
};
