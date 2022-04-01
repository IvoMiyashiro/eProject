import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
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

export const handleFormSubmit = (
  e: FormEvent<HTMLFormElement>,
  minPrice: number,
  maxPrice: number,
  stockQuery: boolean,
  categoriesQuery: string[],
  brandsQuery: string[],
  handleValidPriceFilter: Dispatch<SetStateAction<{ ok: boolean; message: string; }>>,
  handleFilters: (categoryQuery: string, brandQuery: string, stockQuery: boolean, pricesQuery: string) => Promise<void>
) => {
  e.preventDefault();
  
  if ((minPrice > maxPrice) && (minPrice !== Infinity) && (maxPrice !== -Infinity)) {
    return handleValidPriceFilter({
      ok: false,
      message: 'Max. price must be higher than min. price.'
    });
  }

  let minP = minPrice ===  Infinity ? '0' : minPrice.toString();
  let maxP = maxPrice === -Infinity ? '0' : maxPrice.toString();

  const categoryQuery = encodeURIComponent(JSON.stringify(categoriesQuery));
  const brandQuery    = encodeURIComponent(JSON.stringify(brandsQuery));
  const pricesQuery   = encodeURIComponent(JSON.stringify([minP, maxP]));

  handleFilters(categoryQuery, brandQuery, stockQuery, pricesQuery);
};
