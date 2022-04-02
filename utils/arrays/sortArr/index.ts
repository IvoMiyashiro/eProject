import { IProduct } from 'interfaces';

export const sortAtoZ = (a: IProduct, b:IProduct) => {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
};

export const sortZtoA = (a: IProduct, b:IProduct) => {
  if ( a.title > b.title ){
    return -1;
  }
  if ( a.title < b.title ){
    return 1;
  }
  return 0;
};

export const sortHighest = (a: IProduct, b:IProduct) => {
  b.price - a.price;
};
