import { Dispatch, SetStateAction } from 'react';

import { IInputControl } from 'helpers/input_control_init_state';

import { useProductOrganization } from 'hooks';

import { InputSelect } from 'components/ui';

import { Div, H3 } from '../ProductPrice/styles';
import { Section } from '../styles';

interface Props {
  productCategory: IInputControl;
  productVendor: IInputControl;
  handleProductCategory: Dispatch<SetStateAction<IInputControl>>;
  handleProductVendor: Dispatch<SetStateAction<IInputControl>>;
}

export const ProductOrganization = ({
  productCategory,
  productVendor,
  handleProductCategory,
  handleProductVendor,
}: Props) => {

  const { categories, vendors } = useProductOrganization();

  return (
    <Div>
      <H3>Product Organization</H3>
      <Section>
        <InputSelect 
          placeholder="Category"
          options={categories as string[]}
          state={productCategory}
          handleStateValue={handleProductCategory}
        />
        <InputSelect 
          placeholder="Vendor"
          options={vendors as string[]}
          state={productVendor}
          handleStateValue={handleProductVendor}
        />
      </Section>
    </Div>
  );
};
