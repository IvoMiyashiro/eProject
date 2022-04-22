export interface ICustomer {
  id: string;
  name: string;
  email: string;
  profile_image: string;
  shipping_info?: Shipping_info;
  token: string;
  role: 'admin' | 'client';
}

export type Shipping_info = {
  address_1: string;
  address_2: string;
  zip: string;
  province: string;
  locality: string;
  phone_number: string;
  additional_info: string;
}
