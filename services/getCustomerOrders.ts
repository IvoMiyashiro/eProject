import { IOrders } from 'interfaces';

interface Response {
  ok: boolean;
  orders: IOrders[];
  totalOrders: number;
}

export const getCustomerOrders = async (
  uid: string,
  filters: any,
): Promise<{orders: IOrders[]; totalOrders: number} | null> => {

  const { limit, offset, searchOrder } = filters;

  const resp = await fetch(
    `/api/customer/${uid}/orders?limit=${limit}&offset=${offset}&search=${searchOrder}`, 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  );

  const { ok, orders, totalOrders }: Response = await resp.json();

  if (!ok) return null;

  return {
    orders,
    totalOrders
  };
};
