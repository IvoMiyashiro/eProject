import { IProduct } from 'interfaces';
import { Title, Services, Price, Buttons, Keypoints, Specs } from './components';
import { Tab, ProductImagesCarrousel, Rating } from 'components/ui';

import { Div, Wrapper, Section, MainInfo, TabSection, ProductImageWrapper } from './styles';

interface Props {
  product: IProduct;
  specs: any;
}

export const Product = ({ product, specs }: Props) => {
  const tabNav  = ['Specs', 'Reviews', 'Q&A'];
  const tabInfo = [
    <Specs key={0} specs={specs}/>,
    'Reviews',
  ];

  return (
    <Div>
      <MainInfo>
        <ProductImageWrapper>
          <ProductImagesCarrousel images={ product.image_urls } title={ product.title } />
        </ProductImageWrapper>
        <Wrapper>
          <Section>
            <Title brand={ product.brand } title={ product.title } />
            <Rating rating={ 5 }/>
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
