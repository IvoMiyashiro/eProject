import { useEffect, useState } from 'react';
import { ICustomer } from 'interfaces';

interface Return {
  customer: ICustomer | null;
  isLoading: boolean;
}

export const useCustomer = (uid: string): Return => {
  const [customer, setCustomer] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/api/customers/${uid}`)
      .then(resp => resp.json())
      .then(({ customer }) => setCustomer(customer));
  }, [uid]);
  
  return {
    customer: customer ? customer[0] : null,
    isLoading: customer ? false : isLoading
  };
};
