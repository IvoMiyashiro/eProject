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
  brands:     BrandList[];
  categories: CategoryList[];
  stock:      boolean;
  price:      number[];
  search:     string;
}

export const PRODUCT_LIST_INIT_STATE: ProductListState = {
  brands:       [],
  categories:   [],
  display:      'grid',
  filters: {
    brands:     [],
    categories: [],
    stock:      false,
    price:      [],
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
