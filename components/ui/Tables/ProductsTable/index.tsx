import { IProduct } from 'interfaces';

import { TableSkeleton } from '../TableSkeleton';
import { TableRow } from './TableRow';

import { Div, Table, TBody, Th, THead, Tr } from '../styles';

interface Props {
  products: IProduct[];
  isLoading: boolean;
}

export const ProductsTable = ({ products, isLoading }: Props) => {
  return (
    <Div>
      <Table>
        <THead>
          <Tr>
            <Th> Product </Th>
            <Th> Status </Th>
            <Th> Stock </Th>
            <Th> Price </Th>
            <Th> Actions </Th>
          </Tr>
        </THead>
        <TBody>
          {
            isLoading
              ? <TableSkeleton numOfTr={10} numOfTd={6} />
              : (
                products?.map(product => {
                  return (
                    <TableRow
                      key={product.id}
                      product={product}
                    />
                  );
                })
              )
          }
        </TBody>
      </Table>
    </Div>
  );
};

