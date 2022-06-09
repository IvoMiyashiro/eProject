import { FC, useCallback, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import { obj } from 'utils';
import { getBrands, getCategories, getProducts } from 'services';

import { BrandList, CategoryList, IProduct } from 'interfaces';
import { CatalogContext, catalogReducer, PRODUCT_LIST_INIT_STATE } from './';

export const CatalogProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(catalogReducer, PRODUCT_LIST_INIT_STATE);
  const router = useRouter();

  useEffect(() => {
    try {
      const cookieDisplay = Cookies.get('PRODUCT_DISPLAY') ? Cookies.get('PRODUCT_DISPLAY')! : '';

      if (cookieDisplay === 'list') return changeDisplayToList();
      if (cookieDisplay === 'grid') return changeDisplayToGrid();
    } catch (error) {
      Cookies.set('PRODUCT_DISPLAY', 'grid');
    }
  }, []);


  useEffect(() => {
    loadBrands();
    loadCategories();
  }, []);


  const loadProducts = useCallback(async (offset: number = 0, isFiltered: boolean) => {
    const products = await getProducts(offset, state.filters);

    if (products.length === 0) {
      return dispatch({ type: '[PRODUCT LIST] - NO MORE PRODUCTS' });
    }

    if (isFiltered) {
      return dispatch({
        type: '[PRODUCT LIST] - LOAD PRODUCTS FROM START',
        payload: products
      });
    }

    return dispatch({
      type: '[PRODUCT LIST] - LOAD PRODUCTS',
      payload: products
    });
  }, [state.filters]);


  useEffect(() => {
    startLoading();
    const query = router.query;
    const isFiltered = obj.isEmpty(query) ? false : true;
    const OFFSET = 0;

    loadProducts(OFFSET, isFiltered);
  }, [router, loadProducts]);


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


  const updateCategoriesFilter = (value: CategoryList) => {
    const isInFiltersArr = state.filters.categories!.includes(value);

    if (isInFiltersArr) {
      const newFilter = state.filters.categories!.filter(category => (category !== value));
      return dispatch({ type: '[PRODUCT LIST] - UPDATE CATEGORIES FILTER', payload: newFilter });
    }

    const newFilter = [...state.filters.categories!, value];
    dispatch({ type: '[PRODUCT LIST] - UPDATE CATEGORIES FILTER', payload: newFilter });
  };


  const updateBrandsFilter = (value: BrandList) => {
    const isInFiltersArr = state.filters.brands!.includes(value);

    if (isInFiltersArr) {
      const newFilter = state.filters.brands!.filter(brands => (brands !== value));
      return dispatch({ type: '[PRODUCT LIST] - UPDATE BRANDS FILTER', payload: newFilter });
    }

    const newFilter = [...state.filters.brands!, value];
    dispatch({ type: '[PRODUCT LIST] - UPDATE BRANDS FILTER', payload: newFilter });
  };


  const sortCatalog = (products: IProduct[]) => {
    startLoading();
    dispatch({
      type: '[PRODUCT LIST] - SORT PRODUCT LIST',
      payload: products
    });
  };


  const changeDisplayToGrid = () => {
    Cookies.set('PRODUCT_DISPLAY', 'grid');
    dispatch({ type: '[PRODUCT LIST] - CHANGE DISPLAY TO GRID' });
  };


  const changeDisplayToList = () => {
    Cookies.set('PRODUCT_DISPLAY', 'list');
    dispatch({ type: '[PRODUCT LIST] - CHANGE DISPLAY TO LIST' });
  };


  const updatePriceFilter = (minValue: number, maxValue: number) => {
    dispatch({ type: '[PRODUCT LIST] - UPDATE PRICE FILTER', payload: [minValue, maxValue]});
  };


  const startLoading = () => {
    dispatch({ type: '[PRODUCT LIST] - START LOADING PRODUCTS' });
  };


  const toggleFilterMenu = () => {
    dispatch({ type: '[PRODUCT LIST] - TOGGLE FILTER MENU' });
  };


  const updateStockFilter = () => {
    dispatch({ type: '[PRODUCT LIST] - TOGGLE STOCK FILTER' });
  };
  
  return (
    <CatalogContext.Provider value={{
      ...state,

      //Methods
      changeDisplayToGrid,
      changeDisplayToList,
      loadProducts,
      sortCatalog,
      toggleFilterMenu,
      updateBrandsFilter,
      updateCategoriesFilter,
      updatePriceFilter,
      updateStockFilter
    }}>
      { children }
    </CatalogContext.Provider>
  );
};
