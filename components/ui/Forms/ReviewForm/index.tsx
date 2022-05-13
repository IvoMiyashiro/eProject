import { FormEvent, useEffect, useState } from 'react';

import { useProduct } from 'hooks';

import { INPUT_CONTOL_INIT_STATE } from 'helpers/input_control_init_state';

import { Spinner, InputTextarea, Button } from 'components/ui';
import { Header } from './Header';

import { lightTheme } from 'styles';
import { ButtonWrapper, Div, Form, SpinnerWrapper } from './styles';

interface Props { product_id: string; }

export const ReviewForm = ({ product_id }: Props) => {

  const { product, isLoading } = useProduct(product_id);

  const [isValidForm, setValidForm] = useState(false);
  const [prosInputControl, setProsInputControl] = useState(INPUT_CONTOL_INIT_STATE);
  const [consInputControl, setConsInputControl] = useState(INPUT_CONTOL_INIT_STATE);
  const [overallInputControl, setOverallInputControl] = useState(INPUT_CONTOL_INIT_STATE);
  
  useEffect(() => {
    if (!prosInputControl.hasError && !consInputControl.hasError && !overallInputControl.hasError) {
      setValidForm(true);
    }
  }, [prosInputControl.hasError, consInputControl.hasError, overallInputControl.hasError]);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = false;
    
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

    if (!valid) return;
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
                  Confirm
                </Button>
              </ButtonWrapper>
            </>
          )
      }
    </Form>
  );
};
