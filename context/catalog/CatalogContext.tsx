import { createContext } from 'react';
import { BrandList, CategoryList, IProduct } from 'interfaces';

interface ContextProps {
  productList: IProduct[];
  categories: CategoryList[];
  brands: BrandList[];
  isLoading: boolean;

  //Methods
  applyCatalogFilter: (categoryQuery: string, brandQuery: string) => Promise<void>;
}

export const CatalogContext = createContext({} as ContextProps);
