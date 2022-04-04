import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';

import { array } from 'utils';
import { BrandList, CategoryList, IProduct } from 'interfaces';
import { CatalogContext, catalogReducer } from './';

export interface ProductListState {
  productList: IProduct[];
  categories: CategoryList[];
  brands: BrandList[];
  isLoading: boolean;
  isFilterMenuOpen: boolean;
  display: 'grid' | 'list';
}

const PRODUCT_LIST_INIT_STATE: ProductListState = {
  productList: [],
  categories: [],
  brands: [],
  isLoading: true,
  isFilterMenuOpen: false,
  display: 'grid',
};

export const CatalogProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(catalogReducer, PRODUCT_LIST_INIT_STATE);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const productDisplay = Cookies.get('PRODUCT_DISPLAY');

    if (!!!productDisplay) {
      Cookies.set('PRODUCT_DISPLAY', 'grid');
    };

    if (productDisplay === 'list') {
      changeDisplayToList();
    }

    if (productDisplay === 'grid') {
      changeDisplayToGrid();
    }
  }, []);

  const startLoading = () => {
    dispatch({ type: '[PRODUCT LIST] - START LOADING' });
  };

  const toggleFilterMenu = () => {
    dispatch({ type: '[PRODUCT LIST] - TOGGLE FILTER MENU' });
  };

  const applyCatalogFilter = async (
    categoryQuery: string,
    brandQuery: string,
    stockQuery: boolean,
    priceQuery: string
  ) => {
    startLoading();
    const resp = await fetch(`/api/products?c=${categoryQuery}&b=${brandQuery}&s=${stockQuery}&p=${priceQuery}`);
    const { products } = await resp.json();

    dispatch({
      type: '[PRODUCT LIST] - APPLY FILTERS',
      payload: products
    });
  };

  const sortCatalog = (products: IProduct[]) => {
    startLoading();
    dispatch({
      type: '[PRODUCT LIST] - SORT PRODUCT LIST',
      payload: products
    });
  };

  const changeDisplayToGrid = () => {
    Cookies.remove('PRODUCT_DISPLAY');
    Cookies.set('PRODUCT_DISPLAY', 'grid');
    dispatch({ type: '[PRODUCT LIST] - CHANGE DISPLAY TO GRID' });
  };

  const changeDisplayToList = () => {
    Cookies.remove('PRODUCT_DISPLAY');
    Cookies.set('PRODUCT_DISPLAY', 'list');
    dispatch({ type: '[PRODUCT LIST] - CHANGE DISPLAY TO LIST' });
  };

  const loadData = async () => {

    try {
      const productResp = await fetch('/api/products');
      const { ok, products } = await productResp.json();
      
      if (!ok) return;
      
      dispatch({
        type: '[PRODUCT LIST] - LOAD PRODUCTS',
        payload: products
      });
  
      const brands = products.map((product: IProduct) => {
        return product.brand;
      });
      dispatch({
        type: '[PRODUCT LIST] - LOAD BRANDS',
        payload: array.uniqueArr(brands)
      });
  
      const category = products.map((product: IProduct) => {
        return product.category;
      });
      dispatch({
        type: '[PRODUCT LIST] - LOAD CATEGORIES',
        payload: array.uniqueArr(category)
      });
    } catch (error) {
      console.log(error);  
    }
  };

  return (
    <CatalogContext.Provider value={{
      ...state,

      //Methods
      applyCatalogFilter,
      sortCatalog,
      changeDisplayToGrid,
      changeDisplayToList,
      toggleFilterMenu
    }}>
      { children }
    </CatalogContext.Provider>
  );
};
