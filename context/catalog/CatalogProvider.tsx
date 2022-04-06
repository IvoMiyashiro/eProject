import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';

import { BrandList, CategoryList, IProduct } from 'interfaces';
import { getBrands, getCategories, getProducts } from 'services';
import { CatalogContext, catalogReducer, Filters, PRODUCT_LIST_INIT_STATE } from './';

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

  const applyCatalogFilter = async (offset: number = 0, filters: Filters) => {
    const { categories, brands, stock, price } = filters;
    startLoading();
    
    const products = await getProducts(offset, categories, brands, stock, price);
    console.log(products);
    if (products.length === 0) {
      return dispatch({ type: '[PRODUCT LIST] - NO MORE PRODUCTS' });
    }

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
    Cookies.set('PRODUCT_DISPLAY', 'grid');
    dispatch({ type: '[PRODUCT LIST] - CHANGE DISPLAY TO GRID' });
  };

  const changeDisplayToList = () => {
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

  const startLoading = () => {
    dispatch({ type: '[PRODUCT LIST] - START LOADING' });
  };

  const toggleFilterMenu = () => {
    dispatch({ type: '[PRODUCT LIST] - TOGGLE FILTER MENU' });
  };

  const updateStockFilter = () => {
    dispatch({ type: '[PRODUCT LIST] - TOGGLE STOCK FILTER' });
  };

  const updateCategoriesFilter = (value: CategoryList) => {
    const isInFiltersArr = state.filters.categories.includes(value);

    if (isInFiltersArr) {
      const newFilter = state.filters.categories.filter(category => (category !== value));
      return dispatch({ type: '[PRODUCT LIST] - UPDATE CATEGORIES FILTER', payload: newFilter });
    }

    const newFilter = [...state.filters.categories, value];
    dispatch({ type: '[PRODUCT LIST] - UPDATE CATEGORIES FILTER', payload: newFilter });
  };

  const updateBrandsFilter = (value: BrandList) => {
    const isInFiltersArr = state.filters.brands.includes(value);

    if (isInFiltersArr) {
      const newFilter = state.filters.brands.filter(brands => (brands !== value));
      return dispatch({ type: '[PRODUCT LIST] - UPDATE BRANDS FILTER', payload: newFilter });
    }

    const newFilter = [...state.filters.brands, value];
    dispatch({ type: '[PRODUCT LIST] - UPDATE BRANDS FILTER', payload: newFilter });
  };

  const updatePriceFilter = (minValue: number, maxValue: number) => {
    dispatch({ type: '[PRODUCT LIST] - UPDATE PRICE FILTER', payload: [minValue, maxValue]});
  };
  
  return (
    <CatalogContext.Provider value={{
      ...state,

      //Methods
      applyCatalogFilter,
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
