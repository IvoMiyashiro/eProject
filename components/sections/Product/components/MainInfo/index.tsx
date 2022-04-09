import { IProduct } from 'interfaces';
import { Rating, ProductImagesCarrousel } from 'components/ui';
import { Services } from './Services';
import { Buttons } from './Buttons';
import { Keypoints } from './Keypoints';
import { Title } from './Title';
import { Price } from './Price';

import { Div, Wrapper, Section } from './styles';

interface Props {
  product: IProduct
}

export const MainInfo = ({ product }: Props) => {

  const { image_urls, brand, title, price, discount_price, description } = product;

  return (
    <Div>
      <ProductImagesCarrousel images={ image_urls } title={ title } />
      <Wrapper>
        <Section>
          <Title brand={ brand } title={ title } />
          <Rating rating={ 5 }/>
          <Services />
          <Price price={price} discount_price={discount_price} />
          <Buttons product={product} />
          <Keypoints keypoints={description} />
        </Section>
      </Wrapper>
    </Div>
  );
};
