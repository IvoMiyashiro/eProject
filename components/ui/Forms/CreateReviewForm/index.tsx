import { useContext, useState } from 'react';

import { AuthContext } from 'context';
import { ICreateReviewData } from 'interfaces';
import { useForm, useProduct } from 'hooks';
import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { Spinner, InputTextarea, Button, RatingStarsFiller } from 'components/ui';
import { Header } from './Header';

import { lightTheme } from 'styles';
import { ButtonWrapper, Div, Form, H2, Section, Span, SpinnerWrapper } from './styles';

interface Props {
  product_id: string;
  handleModalOpen: (value: boolean) => void ;
  handleAddReview: (reviewData: ICreateReviewData) => Promise<void>;
}

export const CreateReviewForm = ({ product_id, handleModalOpen, handleAddReview }: Props) => {

  const { customer } = useContext(AuthContext);
  const { product, isLoading } = useProduct(product_id);

  const [isRatingSelected, setRatingSelected] = useState(false);
  const [ratingInputControl, setRatingInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [prosInputControl, setProsInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [consInputControl, setConsInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [overallInputControl, setOverallInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const { isLoading: isSubmitLoading, isValidForm, handleSubmit } = useForm({
    states: [{
      state: prosInputControl,
      handleState: setProsInputControl
    }, {
      state: consInputControl,
      handleState: setConsInputControl
    }, {
      state: overallInputControl,
      handleState: setOverallInputControl
    }, {
      state: ratingInputControl,
      handleState: setRatingInputControl
    }],
    callbacks: {
      async startUploadingReview() {
        await handleAddReview({
          product_id,
          customer_id: customer?.id,
          rating: Number(ratingInputControl.value),
          pros: prosInputControl.value,
          cons: consInputControl.value,
          overall: overallInputControl.value,
        });
        handleModalOpen(false);
      }
    }
  });

  return (
    <Form onSubmit={handleSubmit}>
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
                    rating={Number(ratingInputControl.value)}
                    isRatingSelected={isRatingSelected}
                    handleRating={setRatingInputControl}
                    handleRatingSelected={setRatingSelected}
                  />
                  <Span>{ ratingInputControl.errorMsj }</Span>
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
