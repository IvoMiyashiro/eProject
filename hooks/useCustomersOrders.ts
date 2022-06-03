import { useEffect, useState } from 'react';
import { IOrders } from 'interfaces';

interface Props {
  limit?: number;
  offset?: number;
  searchOrder: string;
}

export const useCustomersOrders = ({ limit, offset, searchOrder }: Props) => {

  const [orders, setOrders] = useState<[] | IOrders[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/orders?limit=${limit}&offset=${offset}`, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(({ orders }) => {
        setOrders(orders);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [limit, offset]);

  return {
    orders,
    isLoading,
  };
};
