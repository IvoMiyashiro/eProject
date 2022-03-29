import { IProduct } from 'interfaces';
import { AsideFilter, ProductGridCard } from 'components/ui';

import styled from 'styled-components';
import { Header } from './Header';

interface Props {
  productList: IProduct[];
}

export const Catalog = ({ productList }: Props) => {
  return (
    <Div>
      <AsideFilter />
      <Wrapper>
        <Header />
        <ProductList>
          {
            productList.map(product => {
              return <ProductGridCard key={product.id} product={product} />;
            })
          }
        </ProductList>
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  gap: 2em;
  margin-top: 5em;
`;

const Wrapper = styled.div``;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 2.5em;
  justify-content: center;
`;
