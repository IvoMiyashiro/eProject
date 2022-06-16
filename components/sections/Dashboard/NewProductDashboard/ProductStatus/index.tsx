import { Dispatch, SetStateAction, useEffect } from 'react';

import { IInputControl } from 'helpers/input_control_init_state';
import { InputSelect } from 'components/ui';

import { H3 } from '../ProductMedia/styles';
import { Div } from '../ProductPrice/styles';

interface Props {
  productStatus: IInputControl;
  handleProductStatus: Dispatch<SetStateAction<IInputControl>>
}

export const ProductStatus = ({ productStatus, handleProductStatus }: Props) => {

  useEffect(() => {
    handleProductStatus(prev => ({
      ...prev,
      value: 'Active'
    }));
  }, [handleProductStatus]);

  return (
    <Div>
      <H3>Product status</H3>
      <InputSelect
        handleStateValue={handleProductStatus}
        options={['Active', 'Inactive']}
        placeholder="Product status"
        state={productStatus}
      />
    </Div>
  );
};
