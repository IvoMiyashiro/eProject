interface Props {
  customer_id: string;
  address_id: string;
  address: string;
  zip: string;
  province: string;
  locality: string;
  additional_info: string;
}

export const updateAddress = async ({
  customer_id,
  address_id,
  address,
  zip,
  province,
  locality,
  additional_info,
}: Props) => {
  const resp = await fetch(`/api/customer/${customer_id}/address`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      address_id,
      address,
      zip, 
      province, 
      locality, 
      additional_info
    }),
  });

  const { ok, address: DBAddress } = await resp.json();

  return { ok, address: DBAddress };
};
