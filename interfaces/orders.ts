import { IAddress } from 'interfaces';

export interface IOrders {
  id: string;
  address: IAddress;
  shipping_method: 'delivery' | 'pick up';
  shipping_status: 'pending' | 'delivered' | 'canceled';
  payment_status: 'pending' | 'paid' | 'canceled';
  products_id: string[];
  total_paid: number;
  name?: string;
  created_at: Date;
  updated_at: Date;
}
