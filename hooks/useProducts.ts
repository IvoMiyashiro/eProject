import useSWR, { SWRConfiguration } from 'swr';
import { IProduct } from '../interfaces';

interface ProductResponse {
  ok: boolean;
  products: IProduct[];
}

export const useProducts = (url: string, config: SWRConfiguration = {}) => {

  const { data, error } = useSWR<ProductResponse>(`/api${url}`, config);

  return {
    products: data?.products || [],
    isLoading: !error && !data,
    isError: error
  };
};
