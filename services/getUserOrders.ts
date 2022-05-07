import { IOrders } from 'interfaces';

interface Response {
  ok: boolean;
  orders: IOrders[];
}

export const getUserOrders = async (uid: string): Promise<IOrders[] | []> => {

  const resp = await fetch(`/api/customer/${uid}/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({}),
  });

  const { ok, orders }: Response = await resp.json();

  if (!ok) return [];

  return orders;
};
