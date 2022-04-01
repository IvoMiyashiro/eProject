import { FC, useEffect, useReducer } from 'react';

import { array } from 'utils';
import { BrandList, CategoryList, IProduct } from 'interfaces';
import { CatalogContext, catalogReducer } from './';

export interface ProductListState {
  productList: IProduct[];
  categories: CategoryList[]
  brands: BrandList[],
  isLoading: boolean;
}

const PRODUCT_LIST_INIT_STATE: ProductListState = {
  productList: [],
  categories: [],
  brands: [],
  isLoading: true,
};

export const CatalogProvider: FC = ({ children }) => {

  const [ state, dispatch ] = useReducer(catalogReducer, PRODUCT_LIST_INIT_STATE);

  useEffect(() => {
    fetch('/api/products')
      .then(resp => resp.json())
      .then(({ ok, products }) => {
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
      })
      .catch(error => console.log(error));
  }, []);

  const startLoading = () => {
    dispatch({ type: '[PRODUCT LIST] - START LOADING' });
  };

  const applyCatalogFilter = async (categoryQuery: string, brandQuery: string) => {
    startLoading();
    const resp = await fetch(`/api/products?c=${categoryQuery}&b=${brandQuery}`);
    const { products } = await resp.json();

    dispatch({
      type: '[PRODUCT LIST] - APPLY FILTERS',
      payload: products
    });
  };


  return (
    <CatalogContext.Provider value={{
      ...state,

      //Methods
      applyCatalogFilter
    }}>
      { children }
    </CatalogContext.Provider>
  );
};
