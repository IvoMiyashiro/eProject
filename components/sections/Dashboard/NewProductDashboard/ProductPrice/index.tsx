import { Dispatch, SetStateAction, useEffect } from 'react';

import { IInputControl } from 'helpers/input_control_init_state';

import { InputNumber } from 'components/ui';

import { Div, H3, Section, Wrapper } from './styles';

interface Props {
  productPrice: IInputControl;
  productStock: IInputControl;
  maxAmount: IInputControl;
  handleProductPrice: Dispatch<SetStateAction<IInputControl>>;
  handleProductStock: Dispatch<SetStateAction<IInputControl>>;
  handleMaxAmount: Dispatch<SetStateAction<IInputControl>>
}

export const ProductPrice = ({ 
  productPrice, 
  productStock,
  maxAmount,
  handleProductPrice, 
  handleProductStock,
  handleMaxAmount
}: Props) => {

  useEffect(() => {
    handleProductPrice(prev => ({
      ...prev,
      value: '0'
    }));
    handleProductStock(prev => ({
      ...prev,
      value: '0'
    }));
    handleMaxAmount(prev => ({
      ...prev,
      value: '0'
    }));
  }, [handleProductPrice, handleProductStock, handleMaxAmount]);

  return (
    <Div>
      <H3>Price</H3>
      <Wrapper>
        <InputNumber
          type="price"
          placeholder="Price"
          state={productPrice}
          handleStateValue={handleProductPrice}
        />
      </Wrapper>
      <Section>
        <H3>Stock</H3>
        <Wrapper>
          <InputNumber
            type="num"
            placeholder="Stock"
            state={productStock}
            handleStateValue={handleProductStock}
          />
          <InputNumber
            type="num"
            placeholder="Max. amount per customer"
            state={maxAmount}
            handleStateValue={handleMaxAmount}
          />
        </Wrapper>
      </Section>
    </Div>
  );
};
