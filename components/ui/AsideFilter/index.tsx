import { useContext } from 'react';
import { useRouter } from 'next/router';

import { CatalogContext } from 'context';
import { Button } from 'components/ui';
import { PriceFilter, Stock, CheckboxList } from './components';

import { Aside, ReasetButtonWrapper } from './styles';

export const AsideFilter = () => {

  const { 
    brands,
    categories,
    isBrandLoading,
    isCategoryLoading,
    updateBrandsFilter,
    updateCategoriesFilter
  } = useContext(CatalogContext);
  const router = useRouter();

  return (
    <Aside>
      <Stock />
      <CheckboxList list={brands} title="Manufacturer" rows={17} isLoading={isBrandLoading} handleUpdateFilters={updateBrandsFilter} />
      <CheckboxList list={categories} title="Categories" rows={9} isLoading={isCategoryLoading} handleUpdateFilters={updateCategoriesFilter} />
      <PriceFilter />
      <ReasetButtonWrapper>
        <Button
          bRadius='4px'
          bgColor=''
          textColor=''
          onClick={() => router.push('/products')}
        >
          Reset
        </Button>
      </ReasetButtonWrapper>
    </Aside>
  );
};

