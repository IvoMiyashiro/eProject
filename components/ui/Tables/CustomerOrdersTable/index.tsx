import dayjs from 'dayjs';

import { IOrders } from 'interfaces';
import { StatusLabels } from 'components/ui';
import { TableSkeleton } from '../TableSkeleton';

import { Table, TBody, Td, Th, THead, Tr } from './styles';

interface Props {
  orders: IOrders[];
  isLoading: boolean;
}

export const CustomerOrdesTable = ({ orders, isLoading }: Props) => {

  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Th> Order </Th>
            <Th> Date </Th>
            <Th> Total </Th>
            <Th> Items </Th>
            <Th> Shipping Method </Th>
            <Th> Shipping Status </Th>
          </Tr>
        </THead>
        <TBody>
          {
            isLoading
              ? <TableSkeleton numOfTr={10} numOfTd={6} />
              : (
                orders.map(({id, created_at, total_paid, products_id, shipping_method, shipping_status}) => {
                  const shippingMethodFormated = shipping_method.charAt(0).toUpperCase() + shipping_method.slice(1);
                  const shippingStatusFormated = shipping_status.charAt(0).toUpperCase() + shipping_status.slice(1);
                  return (
                    <Tr key={id}>
                      <Td> #{id} </Td>
                      <Td> { dayjs(created_at).format('MMM D, h:mm A') } </Td>
                      <Td> ${total_paid} </Td>
                      <Td> {products_id?.length} </Td>
                      <Td> {shippingMethodFormated} </Td>
                      <Td>
                        <StatusLabels 
                          type="pending"
                          content={shippingStatusFormated}
                        />
                      </Td>
                    </Tr>
                  );
                })
              )
          }
        </TBody>
      </Table>
    </>
  );
};
