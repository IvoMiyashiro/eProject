import { IProduct } from 'interfaces';
import { useState, useEffect } from 'react';

interface Props {
  limit: number;
  offset: number;
  search: string;
}

export const useProducts = ({ limit, offset, search }: Props) => {

  const [productsList, setProductsList] = useState<IProduct[] | []>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products?limit=${ limit }&offset=${ offset }&search=${ search }`)
      .then(resp => resp.json())
      .then(({ products, totalCount }) => {
        setProductsList(products);
        setTotalCount(totalCount);
        setLoading(false);
      });
  }, [limit, offset, search]);

  return { 
    isLoading,
    productsList,
    totalCount
  };
};
