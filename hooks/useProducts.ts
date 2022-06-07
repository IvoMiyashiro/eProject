import { IProduct } from 'interfaces';
import { useState, useEffect } from 'react';

interface Props {
  limit: number;
  offset: number;
  search: string;
}

export const useProducts = ({ limit, offset, search }: Props) => {
  const [productsList, setProductsList] = useState<IProduct[] | []>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products?limit=${ limit }&offset=${ offset }&search=${ search }`)
      .then(resp => resp.json())
      .then(body => {
        setProductsList(body.products);
        setLoading(false);
      });
  }, [limit, offset, search]);

  return { 
    isLoading,
    productsList
  };
};
