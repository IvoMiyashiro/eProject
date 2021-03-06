import { BrandList, CategoryList } from './';

export interface IProduct {
  id:             string;
  title:          string;
  price:          number;
  discount_price: number;
  description:    string;
  stock:          number;
  category:       CategoryList;
  brand:          BrandList;
  labels:         string[];
  image_urls:     string[];
  total_sold:     number;
  rating?:        number;
  status:         'active' | 'inactive';
  created_at:     Date;
  updated_at:     Date;
}

export interface IProductImages {
  id:         string;
  product_id: string;
  imageUrl:   string;
}

export interface IProductCart extends IProduct {
  quantity: number;
}
