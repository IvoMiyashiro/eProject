import { useContext, useEffect, useState } from 'react';
import { getCustomerOrders } from 'services';
import { IOrders } from 'interfaces';
import { AuthContext } from 'context';

export const useCustomerOrders = (
  limit: number | undefined = undefined,
  offset: number | undefined = undefined
) => {

  const { customer } = useContext(AuthContext);
  const [orders, setOrders] = useState<[] | IOrders[]>([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filters = {
      limit,
      offset
    };

    if (customer === undefined) return; 
    getCustomerOrders(customer.id, filters).then(resp => {
      setOrders(resp?.orders || []);
      setTotalOrders(resp?.totalOrders || 0);
      setLoading(false);
    }); 
  }, [customer, limit, offset]);

  return {
    orders,
    isLoading,
    totalOrders
  };
};
