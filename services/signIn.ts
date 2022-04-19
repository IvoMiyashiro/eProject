import { ICustomer } from 'interfaces';

interface Response { ok: boolean; customer: ICustomer; message: string;}

export const signIn = async (email: string, password: string): Promise<{ customer?: ICustomer; message?: string}> => {

  const resp = await fetch(`${ process.env.BASE_URL }/api/customer/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password}),
  });

  const { ok, customer, message }: Response = await resp.json();

  if (!ok) return { message };

  return { customer };
};
