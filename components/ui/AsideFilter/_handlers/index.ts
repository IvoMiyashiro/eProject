import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { NextRouter } from 'next/router';

import { Filters } from 'context';
import { array } from 'utils';

export const handleCheckboxChange = (
  e: ChangeEvent<HTMLInputElement>,
  query: string[],
  handleQuery: Dispatch<SetStateAction<string[]>>
) => {

  const value: string = e.target.value;

  if (!query.includes(value)) {
    return handleQuery(prev => ([
      ...prev,
      e.target.value
    ]));
  } 

  const newQueryArr: string[] = array.remove(query, value);
  handleQuery(newQueryArr);
};



export const handleStockInputChange = (
  e: ChangeEvent<HTMLInputElement>,
  handleQuery: Dispatch<SetStateAction<boolean>>
) => {

  if (e.target.checked) {
    return handleQuery(true);
  }

  handleQuery(false);
};



export const handleResetFilters = (
  handleFilters: (
    categoryQuery: string,
    brandQuery: string,
    stockQuery: boolean,
    pricesQuery: string) => Promise<void>
) => {
  handleFilters('', '', false, '[0, \'0]');
};



export const handleSubmit = (
  e: FormEvent<HTMLFormElement>,
  filters: Filters,
  router: NextRouter,
  handleButtonVisible: Dispatch<SetStateAction<boolean>>,
  handleApplyFilter: (offset: number, filters: Filters, firstApply: boolean) => Promise<void>,
) => {
  e.preventDefault();

  router.push({
    pathname: '/products',
    query: {
      brands: filters.brands,
      categories: filters.categories,
      stock: filters.stock,
      price: filters.price,
    },
  }, undefined, { shallow: true });

  handleButtonVisible(false);
  handleApplyFilter(0, filters, true);
};



export const handleInputMaxNumberChange = (
  e: ChangeEvent<HTMLInputElement>,
  minPrice: number,
  handleValidPriceFilter: Dispatch<SetStateAction<{ ok: boolean; message: string; }>>,
  handleButtonVisible: Dispatch<SetStateAction<boolean>>,
  handleMaxPrice: Dispatch<SetStateAction<number | undefined>>,
  handleUpdatePriceFilter: (minValue: number, maxValue: number) => void
) => {
  handleValidPriceFilter({
    ok: true,
    message: ''
  });
  handleButtonVisible(true);
  handleMaxPrice(Number(e.target.value));
  handleUpdatePriceFilter(minPrice, Number(e.target.value));
};



export const handleInputMinNumberChange = (
  e: ChangeEvent<HTMLInputElement>,
  maxPrice: number,
  handleMinPrice: Dispatch<SetStateAction<number>>,
  handleUpdatePriceFilter: (minValue: number, maxValue: number) => void
) => {
  handleMinPrice(Number(e.target.value));
  handleUpdatePriceFilter(Number(e.target.value), maxPrice);
};
