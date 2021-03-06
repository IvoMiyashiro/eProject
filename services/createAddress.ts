import { IAddress } from 'interfaces';

interface Props {
  customer_id: string;
  address: string;
  zip: string;
  province: string;
  locality: string;
  additional_info: string;
}

interface Response { ok: boolean; address: IAddress; message: string;}

export const createAddress = async ({
  customer_id,
  address,
  zip,
  province,
  locality,
  additional_info,
}: Props) => {

  const resp = await fetch(`/api/customer/${customer_id}/address`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      customer_id,
      address,
      zip, 
      province, 
      locality, 
      additional_info
    }),
  });

  const { ok, address: DBAddress, message }: Response = await resp.json();

  if (!ok) return { ok, message };

  return { ok, address: DBAddress };
};
