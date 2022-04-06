import { BrandList, CategoryList, IProduct } from 'interfaces';
import { ProductListState } from './';

type ProductListActionType = 
  | { type: '[PRODUCT LIST] - START LOADING' }
  | { type: '[PRODUCT LIST] - LOAD PRODUCTS', payload: IProduct[] }
  | { type: '[PRODUCT LIST] - LOAD BRANDS', payload: BrandList[] }
  | { type: '[PRODUCT LIST] - LOAD CATEGORIES', payload: CategoryList[] }
  | { type: '[PRODUCT LIST] - APPLY FILTERS', payload: IProduct[] }
  | { type: '[PRODUCT LIST] - SORT PRODUCT LIST', payload: IProduct[]}
  | { type: '[PRODUCT LIST] - CHANGE DISPLAY TO GRID' }
  | { type: '[PRODUCT LIST] - CHANGE DISPLAY TO LIST' }
  | { type: '[PRODUCT LIST] - TOGGLE FILTER MENU'}
  | { type: '[PRODUCT LIST] - NO MORE PRODUCTS' }
;

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
      productList: [
        ...state.productList,
        ...action.payload
      ],
      haveMoreProducts: true,
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

  case '[PRODUCT LIST] - SORT PRODUCT LIST':
    return {
      ...state,
      productList: action.payload,
      isLoading: false
    };

  case '[PRODUCT LIST] - CHANGE DISPLAY TO GRID':
    return {
      ...state,
      display: 'grid'
    };

  case '[PRODUCT LIST] - CHANGE DISPLAY TO LIST':
    return {
      ...state,
      display: 'list'
    };

  case '[PRODUCT LIST] - TOGGLE FILTER MENU':
    return {
      ...state,
      isFilterMenuOpen: !state.isFilterMenuOpen
    };
  
  case '[PRODUCT LIST] - NO MORE PRODUCTS':
    return {
      ...state,
      haveMoreProducts: false
    };


  default:
    return state;
  }
};
