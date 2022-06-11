import { BrandList, CategoryList, IProduct } from 'interfaces';
import { Filters } from './initState';
import { ProductListState } from './';

type ProductListActionType = 
  | { type: '[PRODUCT LIST] - START LOADING PRODUCTS' }
  | { type: '[PRODUCT LIST] - LOAD PRODUCTS', payload: IProduct[] }
  | { type: '[PRODUCT LIST] - LOAD BRANDS', payload: BrandList[] }
  | { type: '[PRODUCT LIST] - LOAD CATEGORIES', payload: CategoryList[] }
  | { type: '[PRODUCT LIST] - ARE FILTERS APPLIED'}
  | { type: '[PRODUCT LIST] - NO FILTERS APPLIED'}
  | { type: '[PRODUCT LIST] - SORT PRODUCT LIST', payload: IProduct[]}
  | { type: '[PRODUCT LIST] - CHANGE DISPLAY TO GRID' }
  | { type: '[PRODUCT LIST] - CHANGE DISPLAY TO LIST' }
  | { type: '[PRODUCT LIST] - TOGGLE FILTER MENU'}
  | { type: '[PRODUCT LIST] - NO MORE PRODUCTS' }
  | { type: '[PRODUCT LIST] - UPDATE BRANDS FILTER', payload: BrandList[]}
  | { type: '[PRODUCT LIST] - UPDATE CATEGORIES FILTER', payload: CategoryList[]}
  | { type: '[PRODUCT LIST] - TOGGLE STOCK FILTER' }
  | { type: '[PRODUCT LIST] - UPDATE PRICE FILTER', payload: [number, number]}
  | { type: '[PRODUCT LIST] - FILTERS NOT APPLIED' }
  | { type: '[PRODUCT LIST] - LOAD PRODUCTS FROM START', payload: IProduct[]}
  | { type: '[PRODUCT LIST] - LOAD FILTERS', payload: Filters }
;

export const catalogReducer = (state: ProductListState, action: ProductListActionType): ProductListState => {

  switch (action.type) {

  case '[PRODUCT LIST] - START LOADING PRODUCTS':
    return {
      ...state,
      isProductLoading: true
    };

  case '[PRODUCT LIST] - LOAD PRODUCTS':
    return {
      ...state,
      productList: [
        ...state.productList,
        ...action.payload
      ],
      haveMoreProducts: true,
      isProductLoading: false
    };
  
  case '[PRODUCT LIST] - LOAD PRODUCTS FROM START':
    return {
      ...state,
      productList: action.payload,
      isFilterApplied: false,
      haveMoreProducts: true,
      isProductLoading: false
    };

  case '[PRODUCT LIST] - LOAD CATEGORIES':
    return {
      ...state,
      categories: action.payload,
      isCategoryLoading: false
    };

  case '[PRODUCT LIST] - LOAD BRANDS':
    return {
      ...state,
      brands: action.payload,
      isBrandLoading: false
    };

  case '[PRODUCT LIST] - ARE FILTERS APPLIED':
    return {
      ...state,
      isFilterApplied: true,
      isProductLoading: false
    };

  case '[PRODUCT LIST] - NO FILTERS APPLIED':
    return {
      ...state,
      isFilterApplied: false,
      isProductLoading: false
    };

  case '[PRODUCT LIST] - SORT PRODUCT LIST':
    return {
      ...state,
      productList: action.payload,
      isProductLoading: false
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
      haveMoreProducts: false,
      isProductLoading: false
    };

  case '[PRODUCT LIST] - TOGGLE STOCK FILTER':
    return {
      ...state,
      filters: {
        ...state.filters,
        stock: !state.filters.stock
      }
    };

  case '[PRODUCT LIST] - UPDATE BRANDS FILTER':
    return {
      ...state,
      filters: {
        ...state.filters,
        brands: action.payload
      }
    };

  case '[PRODUCT LIST] - UPDATE CATEGORIES FILTER':
    return {
      ...state,
      filters: {
        ...state.filters,
        categories: action.payload
      }
    };

  case '[PRODUCT LIST] - UPDATE PRICE FILTER':
    return {
      ...state,
      filters: {
        ...state.filters,
        price: action.payload
      }
    };

  case '[PRODUCT LIST] - FILTERS NOT APPLIED':
    return {
      ...state,
      isFilterApplied: false
    };

  case '[PRODUCT LIST] - LOAD FILTERS':
    return {
      ...state,
      filters: {
        ...state.filters,
        ...action.payload
      }
    };

  default:
    return state;
  }
};
