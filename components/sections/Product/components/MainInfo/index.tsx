import { Rating } from 'components/ui';
import { Services } from './Services';
import { Buttons } from './Buttons';
import { Keypoints } from './Keypoints';

import { Div, Wrapper, Section, Span, H1, H2, Price, PriceWrapper, Discount } from './styles';
import { ProductImagesCarrousel } from 'components/ui/ProductImagesCarrousel';
import { IProduct } from 'interfaces';

interface Props {
  product: IProduct
}

export const MainInfo = ({ product }: Props) => {

  const { image_urls, brand, title, price, discount_price, description } = product;

  return (
    <Div>
      <ProductImagesCarrousel images={image_urls} title={title} />
      <Wrapper>
        <Section>
          <div>
            <Span>{ brand }</Span>
            <H1>{ title }</H1>
          </div>
          <Rating rating={5}/>
          <Services />
          <PriceWrapper>
            <Price>
              <H2>${ price }</H2>
              <Discount>${ discount_price }</Discount>
            </Price>
          </PriceWrapper>
          <Buttons product={product} />
          <Keypoints keypoints={description} />
        </Section>
      </Wrapper>
    </Div>
  );
};
