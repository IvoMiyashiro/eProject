import { ICustomer } from 'interfaces';

interface Response { ok: boolean; customer: ICustomer; message: string;}

export const signUp = async (name: string, email: string, password: string): Promise<{ customer?: ICustomer; message?: string}> => {

  const resp = await fetch(`${process.env.BASE_URL}/api/customer/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password}),
  });

  const { ok, customer, message }: Response = await resp.json();

  if (!ok) return { message };

  return { customer };
};
