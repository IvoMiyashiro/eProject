interface Props {
  customer_id: string;
  name: string;
  email: string;
  phone_number: string;
  profile_image: string;
}

export const updateCustomerData = async ({ customer_id, name, email, phone_number, profile_image }: Props) => {
  console.log(profile_image);
  const resp = await fetch(`/api/customer/${customer_id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, phone_number, profile_image })
  });

  const { ok, customer } = await resp.json();

  return customer;
};
