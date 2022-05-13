import { useEffect, useState } from 'react';
import { IProduct } from 'interfaces';
import { getProductById } from 'services';

export const useProduct = (product_id: string) => {

  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(product_id)
      .then(resp => {
        setProduct(resp);
        setLoading(false);
      });
  }, [product_id]);

  return {
    product,
    isLoading
  };
};
