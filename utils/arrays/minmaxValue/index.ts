import { IProduct } from 'interfaces';

export const minmaxValue = (array: IProduct[]) => {
  let lowest  = Number.POSITIVE_INFINITY;
  let highest = Number.NEGATIVE_INFINITY;
  let tmp;

  for (let i = array.length - 1; i >= 0; i--) {
    tmp = array[i].discount_price;
    if (tmp < lowest) lowest = tmp;
    if (tmp > highest) highest = tmp;
  }
  
  return [
    lowest,
    highest
  ];
};
