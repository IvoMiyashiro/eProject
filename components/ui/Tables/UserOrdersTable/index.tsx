import { IOrders } from 'interfaces';
import { Table, TBody, Td, Th, THead, Tr } from './styles';
import dayjs from 'dayjs';

interface Props {
  orders: IOrders[]
}

export const UserOrdersTable = ({ orders }: Props) => {
  console.log(orders);
  return (
    <Table>
      <THead>
        <Tr>
          <Th> Order </Th>
          <Th> Date </Th>
          <Th> Total </Th>
          <Th> Items </Th>
          <Th> Ship Method </Th>
          <Th> Ship Status </Th>
          <Th> Payment Status </Th>
        </Tr>
      </THead>
      <TBody>
        {
          orders.map(order => {
            return (
              <Tr key={order.id}>
                <Td> #{order.id} </Td>
                <Td> { dayjs(order.created_at).format('MMM D, h:mm A') } </Td>
                <Td> ${order.total_paid} </Td>
                <Td> 2 </Td>
                <Td> {order.shipping_method.charAt(0).toUpperCase() + order.shipping_method.slice(1)} </Td>
                <Td> {order.shipping_status.charAt(0).toUpperCase() + order.shipping_status.slice(1)} </Td>
                <Td> {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)} </Td>
              </Tr>
            );
          })
        }
      </TBody>
    </Table>
  );
};
