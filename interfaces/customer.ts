import { IAddress } from './address';

export interface ICustomer {
  id: string;
  name: string;
  email: string;
  profile_image: string;
  phone_number?: string;
  address?: IAddress;
  token: string;
  total_purchases?: number;
  created_at: Date;
  updated_at: Date;
  role: 'admin' | 'client';
}
