import { BrandList, CategoryList, IProduct } from 'interfaces';
import { ProductListState } from '.';

type ProductListActionType = 
  | { type: '[PRODUCT LIST] - START LOADING' }
  | { type: '[PRODUCT LIST] - LOAD PRODUCTS', payload: IProduct[] }
  | { type: '[PRODUCT LIST] - LOAD BRANDS', payload: BrandList[] }
  | { type: '[PRODUCT LIST] - LOAD CATEGORIES', payload: CategoryList[] }
  | { type: '[PRODUCT LIST] - APPLY FILTERS', payload: IProduct[] }

export const catalogReducer = (state: ProductListState, action: ProductListActionType): ProductListState => {

  switch (action.type) {

  case '[PRODUCT LIST] - START LOADING':
    return {
      ...state,
      isLoading: true
    };

  case '[PRODUCT LIST] - LOAD PRODUCTS':
    return {
      ...state,
      productList: action.payload,
      isLoading: false
    };

  case '[PRODUCT LIST] - LOAD CATEGORIES':
    return {
      ...state,
      categories: action.payload,
      isLoading: false
    };

  case '[PRODUCT LIST] - LOAD BRANDS':
    return {
      ...state,
      brands: action.payload,
      isLoading: false
    };

  case '[PRODUCT LIST] - APPLY FILTERS':
    return {
      ...state,
      productList: action.payload,
      isLoading: false
    };

  default:
    return state;
  }
};
