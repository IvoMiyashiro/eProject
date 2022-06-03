import { useRouter } from 'next/router';
import dayjs from 'dayjs';

import { IOrders } from 'interfaces';
import { StatusLabels } from 'components/ui';
import { TableSkeleton } from '../TableSkeleton';

import { Div, Table, TBody, Td, Th, THead, Tr } from '../styles';

interface Props {
  orders: IOrders[];
  isLoading: boolean;
  rowLink?: boolean;
}

export const CustomerOrdersTable = ({ orders, isLoading, rowLink = false }: Props) => {

  const withName = !!orders[0]?.name;
  const router = useRouter();

  const handleClick = (id: string) => {
    if (!rowLink) return;
    router.push(`/dashboard/orders/${id}`);
  };

  return (
    <Div>
      <Table>
        <THead>
          <Tr>
            <Th> Order </Th>
            <Th> Date </Th>
            { withName && <Th> Name </Th> }
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
                orders?.map(({id, created_at, total_paid, products_id, shipping_method, shipping_status, name}) => {
                  const shippingMethodFormated = shipping_method.charAt(0).toUpperCase() + shipping_method.slice(1);
                  const shippingStatusFormated = shipping_status.charAt(0).toUpperCase() + shipping_status.slice(1);
                  return (
                    <Tr key={id} onClick={() => handleClick(id)} rowLink>
                      <Td> #{id} </Td>
                      <Td> { dayjs(created_at).format('MMM D, h:mm A') } </Td>
                      { withName && <Td> { name } </Td> }
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
    </Div>
  );
};
