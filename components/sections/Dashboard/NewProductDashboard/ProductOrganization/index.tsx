import { Dispatch, SetStateAction, useState } from 'react';

import { IInputControl, INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { useProductOrganization } from 'hooks';

import { InputSelect } from 'components/ui';
import { LabelsForm } from './LabelsForm';

import { Div, H3 } from '../ProductPrice/styles';
import { Section } from '../styles';

interface Props {
  productCategory: IInputControl;
  productVendor: IInputControl;
  productLabelsList: string[];
  handleProductCategory: Dispatch<SetStateAction<IInputControl>>;
  handleProductVendor: Dispatch<SetStateAction<IInputControl>>;
  handleProductLabelsList: Dispatch<SetStateAction<string[]>>;
}

export const ProductOrganization = ({
  productCategory,
  productVendor,
  productLabelsList,
  handleProductCategory,
  handleProductVendor,
  handleProductLabelsList
}: Props) => {

  const { categories, vendors } = useProductOrganization();
  const [prorductLabel, setProductLabel] = useState(INPUT_CONTROL_INIT_STATE);

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
        <LabelsForm 
          productLabel={prorductLabel}
          productLabelsList={productLabelsList}
          handleProductLabel={setProductLabel}
          handleProductLabelsList={handleProductLabelsList}
        />
      </Section>
    </Div>
  );
};
