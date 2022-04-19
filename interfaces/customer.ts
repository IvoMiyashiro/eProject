export interface ICustomer {
  id: string;
  name: string;
  username: string;
  email: string;
  profile_image: string;
  shipping_info?: Shipping_info;
  role: 'admin' | 'client';
}

export type Shipping_info = {
  adress: string;
  zip: string;
  province: string;
  locality: string;
  phone_number: string;
  additional_info: string;
}
