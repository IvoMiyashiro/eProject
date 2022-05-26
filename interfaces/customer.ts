import { IAddress } from './address';

export interface ICustomer {
  id: string;
  name: string;
  email: string;
  profile_image: string;
  phone_number?: string;
  address?: IAddress;
  token: string;
  role: 'admin' | 'client';
}
