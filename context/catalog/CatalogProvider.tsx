import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';

import { CatalogContext, catalogReducer } from './';
import { BrandList, CategoryList, IProduct } from 'interfaces';
import { getBrands, getCategories, getProducts } from 'services';

export interface ProductListState {
  productList: IProduct[];
  categories: CategoryList[];
  brands: BrandList[];
  isLoading: boolean;
  isFilterMenuOpen: boolean;
  haveMoreProducts: boolean;
  display: 'grid' | 'list';
}

const PRODUCT_LIST_INIT_STATE: ProductListState = {
  productList: [],
  categories: [],
  brands: [],
  isLoading: true,
  isFilterMenuOpen: false,
  haveMoreProducts: false,
  display: 'grid'
};

export const CatalogProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(catalogReducer, PRODUCT_LIST_INIT_STATE);

  useEffect(() => {
    loadProducts();
    loadBrands();
    loadCategories();
  }, []);

  useEffect(() => {
    try {
      const cookieDisplay = Cookies.get('PRODUCT_DISPLAY') ? Cookies.get('PRODUCT_DISPLAY')! : '';

      if (cookieDisplay === 'list') return changeDisplayToList();
      if (cookieDisplay === 'grid') return changeDisplayToGrid();
    } catch (error) {
      Cookies.set('PRODUCT_DISPLAY', 'grid');
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

  const loadProducts = async (offset: number = 0) => {
    const products = await getProducts(offset);

    if (products.length === 0) {
      return dispatch({ type: '[PRODUCT LIST] - NO MORE PRODUCTS' });
    }

    dispatch({
      type: '[PRODUCT LIST] - LOAD PRODUCTS',
      payload: products
    });
  };

  const loadBrands = async () => {
    const brands = await getBrands();

    dispatch({
      type: '[PRODUCT LIST] - LOAD BRANDS',
      payload: brands.map(brand => {
        return brand.brand_name;
      })
    });
  };

  const loadCategories = async () => {
    const categories = await getCategories();

    dispatch({
      type: '[PRODUCT LIST] - LOAD CATEGORIES',
      payload: categories.map(category => {
        return category.category_name;
      })
    });
  };

  return (
    <CatalogContext.Provider value={{
      ...state,

      //Methods
      applyCatalogFilter,
      sortCatalog,
      changeDisplayToGrid,
      changeDisplayToList,
      toggleFilterMenu,
      loadProducts
    }}>
      { children }
    </CatalogContext.Provider>
  );
};
