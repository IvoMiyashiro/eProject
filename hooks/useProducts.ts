import { IProduct } from 'interfaces';
import { useState, useEffect } from 'react';

interface Props {
  limit: number;
  offset: number;
  search: string;
  sortBy: string;
}

export const useProducts = ({ limit, offset, sortBy, search }: Props) => {

  const [productsList, setProductsList] = useState<IProduct[] | []>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const formatedSortBy = formatSortBy(sortBy);
  const formatedOrderBy = formatOrderBy(sortBy);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products?limit=${ limit }&offset=${ offset }&search=${ search }&sortBy=${ formatedSortBy }&orderBy=${ formatedOrderBy }`)
      .then(resp => resp.json())
      .then(({ products, totalCount }) => {
        setProductsList(products);
        setTotalCount(totalCount);
        setLoading(false);
      });
  }, [limit, offset, formatedSortBy, formatedOrderBy, search]);

  return { 
    isLoading,
    productsList,
    totalCount,
    setProductsList
  };
};

const formatSortBy = (value: string) => {
  if (value === 'Highest price' || value === 'Lowest price') {
    return 'price';
  }

  return 'title';
};

const formatOrderBy = (value: string) => {
  if (value === 'A - Z' || value === 'Lowest price') {
    return 'ASC';
  }

  return 'DESC';
};
