import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

import { IProduct } from 'interfaces';
import { updateProduct } from 'services';

import { Button, Tooltip, Spinner } from 'components/ui';

import { lightTheme } from 'styles';
import { Form, Input, Div } from './styles';

interface Props {
  product: IProduct;
  value: string;
  isOpen: boolean;
  closeTooltip: Dispatch<SetStateAction<boolean>>;
  handleStock: Dispatch<SetStateAction<string>>;
}

export const StockForm = ({ product, value, isOpen, closeTooltip, handleStock }: Props) => {

  const [inputValue, setInputValue] = useState(value);
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const result = e.target.value.replace(/\D/g, '');
    setInputValue(result);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await updateProduct({ ...product, stock: Number(inputValue) });
    handleStock(inputValue);
    setLoading(false);
    closeTooltip(false);
  };

  return (
    <>
      {
        isOpen
        &&
        <Tooltip bgColor={lightTheme.color_ui_background} handleClose={() => {closeTooltip(false); setInputValue(value);}} right="1.5em" top="5em">
          <Form onSubmit={handleSubmit}>
            <Input type="text" value={inputValue} onChange={handleInputChange} />
            <Div>
              <Button
                bgColor={lightTheme.color_neutral_0}
                textColor={lightTheme.color_ui_text_main}
                bRadius="4px"
                onClick={() => {closeTooltip(false); setInputValue(value);}}
              >
                Cancel
              </Button>
              <Button 
                bgColor={lightTheme.color_primary_0}
                textColor={lightTheme.color_ui_text_contrast}
                bRadius="4px"
                type="submit"
              >
                {
                  isLoading
                    ? <Spinner size="14px" color={lightTheme.color_ui_background} />
                    : 'Confirm'
                }
              </Button>
            </Div>
          </Form>
        </Tooltip>
      }
    </>
  );
};
