import { createContext } from 'react';
import { BrandList, CategoryList, IProduct } from 'interfaces';
import { Filters } from './initState';

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
  applyCatalogFilter:     (offset: number, filters: Filters, firstApply: boolean) => Promise<void>;
  changeDisplayToGrid:    () => void;
  changeDisplayToList:    () => void;
  loadProducts:           (offset: number) => void;
  sortCatalog:            (products: IProduct[]) => void;
  toggleFilterMenu:       () => void;
  updateBrandsFilter:     (value: BrandList) => void;
  updateCategoriesFilter: (value: CategoryList) => void;
  updatePriceFilter:      (minValue: number, maxValue: number) => void;
  updateStockFilter:      () => void;
}

export const CatalogContext = createContext({} as ContextProps);
