import { useEffect, useState } from 'react';
import { IProduct } from 'interfaces';

interface Props { limit: number }

export const useBestSellers = ({ limit }: Props) => {

  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [isLoading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch(`/api/products/best_sellers?limit=${limit}`, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(({ products }) => {
        setProducts(products);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [limit]);

  return {
    products,
    isLoading
  };
};
