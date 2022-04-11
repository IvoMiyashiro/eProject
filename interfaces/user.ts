export interface ICustomer {
  id: string;
  full_name: string;
  username: string;
  email: string;
  profile_image: string;
  role: 'admin' | 'client';
}
