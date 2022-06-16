import { IBrand, ICategory } from 'interfaces';
import { useEffect, useState } from 'react';

export const useProductOrganization = () => {
  
  const [categories, setCategories] = useState<ICategory[] | []>([]);
  const [vendors, setVendors] = useState<IBrand[] | []>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/categories')
      .then(resp => resp.json())
      .then(({ categories }) => {
        const categArr = categories.map(({ category_name }: any) => {
          return category_name;
        });

        setCategories(categArr);
        setLoading(false);
      }) ;
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch('/api/brands')
      .then(resp => resp.json())
      .then(({ brands }) => {
        const brandsArr = brands.map(({ brand_name }: any) => {
          return brand_name;
        });

        setVendors(brandsArr);
        setLoading(false);
      }) ;
  }, []);

  return {
    categories,
    vendors,
    isLoading
  };
};
