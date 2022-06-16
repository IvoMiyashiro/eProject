import { Dispatch, SetStateAction } from 'react';
import { IInputControl } from 'helpers/input_control_init_state';

import { Div, H3, P, Section } from './styles';
import { InputControl, InputTextarea } from 'components/ui';

interface Props {
  productSEOTitle: IInputControl;
  productSEODesc: IInputControl;
  productSEOSlug: IInputControl;
  handleProductSEOTitle: Dispatch<SetStateAction<IInputControl>>;
  handleProductSEODesc: Dispatch<SetStateAction<IInputControl>>;
  handleProductSEOSlug: Dispatch<SetStateAction<IInputControl>>;
}

export const ProductCEO = ({
  productSEOTitle,
  productSEODesc,
  productSEOSlug,
  handleProductSEOTitle,
  handleProductSEODesc,
  handleProductSEOSlug
}: Props) => {
  return (
    <Div>
      <H3>SEO Preview</H3>
      <P> Add a title and description to see how this product might appear in search engine results.</P>
      <Section>
        <InputControl
          type="text"
          placeholder="Page title"
          state={productSEOTitle}
          maxLength={70}
          handleStateValue={handleProductSEOTitle}
        />
        <InputTextarea 
          placeholder="Meta description"
          state={productSEODesc}
          maxLength={300}
          handleStateValue={handleProductSEODesc}
        />
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
