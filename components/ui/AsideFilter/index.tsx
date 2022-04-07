import { useContext } from 'react';
import { useRouter } from 'next/router';

import { CatalogContext } from 'context';
import { PriceFilter, Stock, Manufacturer, Categories } from './components';
import { Button } from 'components/ui';

import { Aside, ReasetButtonWrapper } from './styles';

export const AsideFilter = () => {

  const { productList } = useContext(CatalogContext);
  const router = useRouter();

  return (
    <Aside>
      <Stock />
      <Manufacturer /> 
      <Categories />
      <PriceFilter productList={productList}/>
      <ReasetButtonWrapper>
        <Button
          bRadius='4px'
          bgColor=''
          textColor=''
          onClick={() => router.reload()}
        >
          Reset
        </Button>
      </ReasetButtonWrapper>
    </Aside>
  );
};

