import { useContext, useState } from 'react';

import { array } from 'utils';

import { CatalogContext } from 'context';
import { PriceFilter, Stock, Manufacturer, Categories } from './components';

import { Aside } from './styles';

export const AsideFilter = () => {

  const { productList } = useContext(CatalogContext);

  const minmaxPrice = array.minmaxValue(productList);
  const [minPrice, setMinPrice] = useState<number>(minmaxPrice[0]);
  const [maxPrice, setMaxPrice] = useState<number>(minmaxPrice[1]);
  const [validPriceFilter, setValidPriceFilter] = useState<{ ok: boolean; message: string }>({ ok: true, message: '' });

  return (
    <Aside>
      <Stock />
      <Manufacturer /> 
      <Categories />
      <PriceFilter
        minPrice={minPrice} 
        maxPrice={maxPrice}
        formError={validPriceFilter}
        handleMinPrice={setMinPrice} 
        handleMaxPrice={setMaxPrice} 
        handleFormError={setValidPriceFilter}
      />
    </Aside>
  );
};

