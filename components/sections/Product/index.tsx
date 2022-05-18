import { useRating, useReviews } from 'hooks';

import { IProduct } from 'interfaces';
import { Tab, ProductImagesCarrousel, Rating } from 'components/ui';
import { Title, Services, Price, Buttons, Keypoints, Specs, Reviews } from './components';

import { Div, Wrapper, Section, MainInfo, TabSection, ProductImageWrapper, RatingWrapper, Span } from './styles';

interface Props {
  product: IProduct;
  specs: any;
}

export const Product = ({ product, specs }: Props) => {
  const tabNav  = ['Specs', 'Reviews'];
  const tabInfo = [
    <Specs key={0} specs={specs} />,
    <Reviews key={1} product_id={product.id} />
  ];
  const { rating, totalLength } = useRating(product.id);

  return (
    <Div>
      <MainInfo>
        <ProductImageWrapper>
          <ProductImagesCarrousel images={ product.image_urls } title={ product.title } />
        </ProductImageWrapper>
        <Wrapper>
          <Section>
            <Title brand={ product.brand } title={ product.title } />
            {
              !!rating 
              &&
              <RatingWrapper>
                <Rating rating={ rating } size="18px" />
                <Span>({ totalLength })</Span>
              </RatingWrapper>
            }
            <Services />
            <Price price={ product.price } discount_price={ product.discount_price } />
            <Buttons product={ product } />
            <Keypoints keypoints={ product.description } />
          </Section>
        </Wrapper>
      </MainInfo>
      <TabSection>
        <Tab nav={tabNav} info={tabInfo}/>
      </TabSection>
    </Div>
  );
};
