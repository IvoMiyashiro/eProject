import { useState } from 'react';

import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { ProductTitle } from './ProductTitle';
import { ProductMedia } from './ProductMedia';
import { ProductPrice } from './ProductPrice';

import { Form, Section } from './styles';
import { ProductCEO } from './ProductCEO';
import { ProductStatus } from './ProductStatus';

export const NewProductDashboard = () => {

  const [productTitle, setProductTitle] = useState(INPUT_CONTROL_INIT_STATE);
  const [productDescription, setProductDescription] = useState(INPUT_CONTROL_INIT_STATE);
  const [productMedia, setProductMedia] = useState<{id?: string; file?: File, fileUrl?: string, isChecked?: boolean}[]>([]);
  const [productPrice, setProductPrice] = useState(INPUT_CONTROL_INIT_STATE);
  const [comparePrice, setComparePrice] = useState(INPUT_CONTROL_INIT_STATE);
  const [productStock, setProductStock] = useState(INPUT_CONTROL_INIT_STATE);
  const [maxAmountPerCustomer, setMaxAmoutPerCustomer] = useState(INPUT_CONTROL_INIT_STATE);
  const [productSEOTitle, setProductSEOTitle] = useState(INPUT_CONTROL_INIT_STATE);
  const [productSEODesc, setProductSEODesc] = useState(INPUT_CONTROL_INIT_STATE);
  const [productSEOSlug, setProductSEOSlug] = useState(INPUT_CONTROL_INIT_STATE);
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
        <ProductPrice 
          productPrice={productPrice}
          comparePrice={comparePrice}
          productStock={productStock}
          maxAmount={maxAmountPerCustomer}
          handleProductPrice={setProductPrice}
          handleComparePrice={setComparePrice}
          handleProductStock={setProductStock}
          handleMaxAmount={setMaxAmoutPerCustomer}
        />
        <ProductCEO
          productSEOTitle={productSEOTitle}
          productSEODesc={productSEODesc}
          productSEOSlug={productSEOSlug}
          handleProductSEOTitle={setProductSEOTitle}
          handleProductSEODesc={setProductSEODesc}
          handleProductSEOSlug={setProductSEOSlug}
        />
      </Section>
      <Section>
        <ProductStatus 
          productStatus={productStatus}
          handleProductStatus={setProductStatus}
        />
      </Section>
    </Form>
  );
};
