import { useState } from 'react';

import { useForm } from 'hooks';
import { createProduct } from 'services';
import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { ProductTitle } from './ProductTitle';
import { ProductMedia } from './ProductMedia';
import { ProductPrice } from './ProductPrice';
import { ProductSEO } from './ProductSEO';
import { ProductStatus } from './ProductStatus';
import { ProductOrganization } from './ProductOrganization';
import { Button, Spinner } from 'components/ui';

import { lightTheme } from 'styles';
import { ButtonWrapper, Div, Form, Section } from './styles';
import { useRouter } from 'next/router';

export const NewProductDashboard = () => {

  const [productTitle, setProductTitle] = useState(INPUT_CONTROL_INIT_STATE);
  const [productDescription, setProductDescription] = useState(INPUT_CONTROL_INIT_STATE);
  const [productMedia, setProductMedia] = useState<{id?: string; file?: File, fileUrl?: string, isChecked?: boolean}[]>([]);
  const [productPrice, setProductPrice] = useState(INPUT_CONTROL_INIT_STATE);
  const [productStock, setProductStock] = useState(INPUT_CONTROL_INIT_STATE);
  const [maxAmountPerCustomer, setMaxAmoutPerCustomer] = useState(INPUT_CONTROL_INIT_STATE);
  const [productSEOSlug, setProductSEOSlug] = useState(INPUT_CONTROL_INIT_STATE);
  const [productStatus, setProductStatus] = useState(INPUT_CONTROL_INIT_STATE);
  const [productCategory, setProductCategory] = useState(INPUT_CONTROL_INIT_STATE);
  const [productVendor, setProductVendor] = useState(INPUT_CONTROL_INIT_STATE);
  const [productLabelsList, setProductLabelsList] = useState<string[]>([]);
  const router = useRouter();

  const { isLoading, isValidForm, handleSubmit } = useForm({
    states: [{
      state: productTitle,
      handleState: setProductTitle
    }, {
      state: productDescription,
      handleState: setProductDescription
    }, {
      state: productCategory,
      handleState: setProductCategory
    }, {
      state: productVendor,
      handleState: setProductVendor
    }],
    callbacks: {
      async createProduct ({ setValidForm, setLoading }: any) {
        const images = productMedia.map(media => media.fileUrl);
        await createProduct({
          productTitle: productTitle.value,
          productDescription: productDescription.value,
          productMedia: images,
          productPrice: productPrice.value,
          productStock: productStock.value,
          maxAmountPerCustomer: maxAmountPerCustomer.value,
          productSEOSlug: productSEOSlug.value,
          productStatus: productStatus.value,
          productCategory: productCategory.value,
          productVendor: productVendor.value,
          productLabelsList: productLabelsList,
        });

        router.push('/dashboard/products');
      }
    }
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
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
            productStock={productStock}
            maxAmount={maxAmountPerCustomer}
            handleProductPrice={setProductPrice}
            handleProductStock={setProductStock}
            handleMaxAmount={setMaxAmoutPerCustomer}
          />
          <ProductSEO
            productSEOSlug={productSEOSlug}
            productTitle={productTitle}
            handleProductSEOSlug={setProductSEOSlug}
          />
        </Section>
        <Section>
          <ProductStatus 
            productStatus={productStatus}
            handleProductStatus={setProductStatus}
          />
          <ProductOrganization 
            productCategory={productCategory}
            productVendor={productVendor}
            productLabelsList={productLabelsList}
            handleProductCategory={setProductCategory}
            handleProductVendor={setProductVendor}
            handleProductLabelsList={setProductLabelsList}
          />
        </Section>
      </Div>

      <ButtonWrapper>
        <Button
          bgColor={lightTheme.color_neutral_0}
          textColor={lightTheme.color_ui_text_main}
          bRadius="4px"
          href="/dashboard/products"
          isLink
        >
          Discard
        </Button>
        <Button
          bgColor={lightTheme.color_primary_0}
          textColor={lightTheme.color_ui_text_contrast}
          bRadius="4px"
          type="submit"
          disabled={!isValidForm}
        >
          {
            isLoading
              ? <Spinner size="18px" />
              : 'Confirm'
          }
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
