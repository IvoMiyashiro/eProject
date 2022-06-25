import { Dispatch, SetStateAction, useEffect } from 'react';
import { IInputControl } from 'helpers/input_control_init_state';

import { InputControl } from 'components/ui';

import { Div, H3, Section } from './styles';

interface Props {
  productSEOSlug: IInputControl;
  productTitle: IInputControl;
  handleProductSEOSlug: Dispatch<SetStateAction<IInputControl>>;
}

export const ProductSEO = ({
  productSEOSlug,
  productTitle,
  handleProductSEOSlug
}: Props) => {

  useEffect(() => {
    handleProductSEOSlug(prev => ({
      ...prev,
      value: productTitle.value.trim()  
        .toLowerCase().replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
    }));
  }, [productTitle.value, handleProductSEOSlug]);

  return (
    <Div>
      <H3>SEO Preview</H3>
      <Section>
        <InputControl
          type="text"
          placeholder="Slug"
          state={productSEOSlug}
          handleStateValue={handleProductSEOSlug}
        />
      </Section>
    </Div>
  );
};
