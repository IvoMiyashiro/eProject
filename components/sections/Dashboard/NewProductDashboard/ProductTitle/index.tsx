
import { Dispatch, SetStateAction } from 'react';

import { IInputControl } from 'helpers/input_control_init_state';

import { InputControl, InputTextarea } from 'components/ui';

import { Wrapper } from '../styles';

interface Props {
  productTitle: IInputControl;
  productDescription: IInputControl;
  handleProductTitle: Dispatch<SetStateAction<IInputControl>>;
  handleProductDescription: Dispatch<SetStateAction<IInputControl>>;
}

export const ProductTitle = ({ 
  productTitle,
  productDescription,
  handleProductTitle,
  handleProductDescription 
}: Props) => {
  return (
    <Wrapper>
      <InputControl 
        type="text"
        placeholder="Title"
        state={productTitle}
        handleStateValue={handleProductTitle}
      />
      <InputTextarea 
        placeholder="Description"
        state={productDescription}
        handleStateValue={handleProductDescription}
      />
    </Wrapper>
  );
};
