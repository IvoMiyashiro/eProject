import { useEffect, useState } from 'react';
import { ICustomer } from 'interfaces';

interface Props {
  limit: number;
}

export const useBestCustomers = ({ limit }: Props) => {
  
  const [customers, setCustomers] = useState<[] | ICustomer[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/customers/best_customers?limit=${limit}`, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(({ customers }) => {
        console.log(customers);
        setCustomers(customers);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [limit]);


  return {
    customers,
    isLoading
  };
};
