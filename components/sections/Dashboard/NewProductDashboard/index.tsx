import { useState } from 'react';

import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { ProductTitle } from './ProductTitle';

import { Form, Section } from './styles';
import { ProductMedia } from './ProductMedia';

export const NewProductDashboard = () => {

  const [productTitle, setProductTitle] = useState(INPUT_CONTROL_INIT_STATE);
  const [productDescription, setProductDescription] = useState(INPUT_CONTROL_INIT_STATE);
  const [productMedia, setProductMedia] = useState<{file: File, fileUrl: string}[]>([]);
  const [productPrice, setProductPrice] = useState(INPUT_CONTROL_INIT_STATE);
  const [comparePrice, setComparePrice] = useState(INPUT_CONTROL_INIT_STATE);
  const [productStock, setProductStock] = useState(INPUT_CONTROL_INIT_STATE);
  const [productStatus, setProductStatus] = useState(INPUT_CONTROL_INIT_STATE);

  return (
    <Form>
      <Section>
        <ProductTitle 
          productTitle={productTitle}
          productDescription={productDescription}
          handleProductTitle={setProductTitle}
          handleProductDescription={setProductDescription}
        />
        <ProductMedia 
          productMedia={productMedia}
          handleProductMedia={setProductMedia}
        />
      </Section>
      <Section>

      </Section>
    </Form>
  );
};
