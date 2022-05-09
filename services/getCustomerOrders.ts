import { IOrders } from 'interfaces';

interface Response {
  ok: boolean;
  orders: IOrders[];
  totalOrders: number;
}

export const getCustomerOrders = async (uid: string, filters: any): Promise<{orders: IOrders[]; totalOrders: number} | null> => {

  const { limit, offset } = filters;

  const resp = await fetch(`/api/customer/${uid}/orders?limit=${limit}&offset=${offset}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({}),
  });

  const { ok, orders, totalOrders }: Response = await resp.json();

  if (!ok) return null;

  return {
    orders,
    totalOrders
  };
};
