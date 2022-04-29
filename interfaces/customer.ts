export interface ICustomer {
  id: string;
  name: string;
  email: string;
  profile_image: string;
  address?: Address;
  token: string;
  role: 'admin' | 'client';
}

export type Address = {
  address: string;
  zip: string;
  province: string;
  locality: string;
  phone_num_1: string,
  phone_num_2: string,
  additional_info: string;
}
