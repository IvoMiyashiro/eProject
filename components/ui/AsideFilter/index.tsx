import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

import { array } from 'utils';
import { handleCheckboxChange, handleStockInputChange, handleFormSubmit } from './_handlers';

import { CatalogContext } from 'context';
import { Button } from 'components/ui';
import { PriceFilter, Stock, Manufacturer, Categories } from './components';

import { lightTheme } from 'styles';
import { Aside, Wrapper, Form } from './styles';

export const AsideFilter = () => {

  const { categories, brands, productList, isLoading, applyCatalogFilter } = useContext(CatalogContext);
  
  const [categoriesQuery, setCategoriesQuery] = useState<string[]>([]);
  const [brandsQuery, setBrandsQuery] = useState<string[]>([]);
  const [stockQuery, setStockQuery] = useState<boolean>(false);
  
  const minmaxPrice = array.minmaxValue(productList);
  const [minPrice, setMinPrice] = useState<number>(minmaxPrice[0]);
  const [maxPrice, setMaxPrice] = useState<number>(minmaxPrice[1]);
  const [validPriceFilter, setValidPriceFilter] = useState<{ ok: boolean; message: string }>({ ok: true, message: '' });

  return (
    <Aside>
      <Form 
        onSubmit={(e) => handleFormSubmit(
          e,
          minPrice,
          maxPrice,
          stockQuery,
          categoriesQuery,
          brandsQuery,
          setValidPriceFilter,
          applyCatalogFilter
        )}
      >
        <Stock 
          handleStockInputChange={(e) => handleStockInputChange(e, setStockQuery)}
          isLoading={isLoading}
        />
        <Manufacturer 
          handleBrandsInputChange={(e) => handleCheckboxChange(e, brandsQuery, setBrandsQuery)}
          brands={brands}
          isLoading={isLoading}
        /> 
        <Categories 
          handleCategInputChange={(e) => handleCheckboxChange(e, categoriesQuery, setCategoriesQuery)}
          categories={categories}
          isLoading={isLoading}
        />
        <PriceFilter
          minPrice={minPrice} 
          maxPrice={maxPrice}
          formError={validPriceFilter}
          handleMinPrice={setMinPrice} 
          handleMaxPrice={setMaxPrice} 
          handleFormError={setValidPriceFilter}
        />
        <Wrapper>
          <Button
            bgColor={lightTheme.color_neutral_2}
            textColor={lightTheme.color_ui_text_contrast}
            bRadius="4px"
            type="button"
            onClick={useRouter().reload}
          >
            Reset
          </Button>
          <Button
            bgColor={lightTheme.color_primary_0}
            textColor={lightTheme.color_ui_text_contrast}
            bRadius="4px"
            type="submit"
          >
            Apply
          </Button>
        </Wrapper>
      </Form>
    </Aside>
  );
};

