interface Props {
  customer_id: string;
  name: string;
  email: string;
  phone_number: string;
}

export const updateCustomerData = async ({ customer_id, name, email, phone_number }: Props) => {

  const resp = await fetch(`/api/customer/${customer_id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, phone_number })
  });

  const { ok, customer } = await resp.json();

  return customer;
};
