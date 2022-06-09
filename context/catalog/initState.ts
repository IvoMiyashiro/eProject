import { BrandList, CategoryList, IProduct } from 'interfaces';

export interface ProductListState {
  brands:            BrandList[];
  categories:        CategoryList[];
  display:           'grid' | 'list';
  filters:           Filters;
  haveMoreProducts:  boolean;
  isFilterApplied:   boolean;
  isFilterMenuOpen:  boolean;
  isProductLoading:  boolean;
  isBrandLoading:    boolean;
  isCategoryLoading: boolean;
  productList:       IProduct[];
}

export type Filters = {
  brands:     BrandList[] | undefined;
  categories: CategoryList[] | undefined;
  stock:      boolean;
  price:      number[] | undefined;
  search:     string;
}

export const PRODUCT_LIST_INIT_STATE: ProductListState = {
  brands:       [],
  categories:   [],
  display:      'grid',
  filters: {
    brands:     undefined,
    categories: undefined,
    stock:      false,
    price:      undefined,
    search:     '',
  },
  haveMoreProducts:  false,
  isFilterApplied:   false,
  isFilterMenuOpen:  false,
  isProductLoading:  true,
  isBrandLoading:    true,
  isCategoryLoading: true,
  productList:       [],
};
