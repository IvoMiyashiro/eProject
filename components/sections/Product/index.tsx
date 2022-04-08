import { IProduct } from 'interfaces';
import { MainInfo } from './components/MainInfo';

import { Div } from './styles';

interface Props {
  product: IProduct
}

export const Product = ({ product }: Props) => {
  return (
    <Div>
      <MainInfo product={product} />
    </Div>
  );
};
