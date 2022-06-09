import { createContext } from 'react';
import { BrandList, CategoryList, IProduct } from 'interfaces';
import { Filters } from './initState';
import { ParsedUrlQuery } from 'querystring';

interface ContextProps {
  brands:                 BrandList[];
  categories:             CategoryList[];
  display:                'grid' | 'list';
  filters:                Filters;
  haveMoreProducts:       boolean;
  isFilterApplied:        boolean;
  isFilterMenuOpen:       boolean;
  isProductLoading:       boolean;
  isBrandLoading:         boolean;
  isCategoryLoading:      boolean;
  productList:            IProduct[];

  //Methods
  changeDisplayToGrid:    () => void;
  changeDisplayToList:    () => void;
  loadProducts:           (offset: number, isFiltered: boolean) => void;
  sortCatalog:            (products: IProduct[]) => void;
  toggleFilterMenu:       () => void;
  updateBrandsFilter:     (value: BrandList) => void;
  updateCategoriesFilter: (value: CategoryList) => void;
  updatePriceFilter:      (minValue: number, maxValue: number) => void;
  updateStockFilter:      () => void;
}

export const CatalogContext = createContext({} as ContextProps);
