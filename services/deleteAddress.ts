import { IAddress } from 'interfaces';

interface Props {
  address_id: string;
  customer_id: string;
}

interface Response { ok: boolean; address: IAddress; message: string;}

export const deleteAddress = async ({ address_id, customer_id }: Props) => {

  const resp = await fetch(`/api/customer/${customer_id}/address`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address_id }),
  });

  const { ok, message }: Response = await resp.json();

  if (!ok) return { ok, message };

  return { ok };
};
