import { IProduct } from 'interfaces';
import { AsideFilter, ProductGridCard, Spinner } from 'components/ui';
import { Header } from './Header';

import { Div, Wrapper, SpinnerWrapper, ProductList } from './styles';

interface Props {
  productList: IProduct[];
  isLoading: boolean;
}

export const Catalog = ({ productList, isLoading }: Props) => {
  return (
    <Div>
      <AsideFilter productList={productList} />
      <Wrapper>
        <Header />
        {
          isLoading
            ? (
              <SpinnerWrapper>
                <Spinner />
              </SpinnerWrapper>
            )
            : (
              <ProductList>
                {
                  productList.map(product => {
                    return <ProductGridCard key={product.id} product={product} />;
                  })
                }
              </ProductList>
            )
        }
      </Wrapper>
    </Div>
  );
};
