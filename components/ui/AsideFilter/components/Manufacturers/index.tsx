import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { array } from 'utils';

import { BrandList } from 'interfaces';
import { CatalogContext } from 'context';
import { Skeleton } from '../';
import { Button } from 'components/ui/Button';

import { lightTheme } from 'styles';
import { Div, H3, ButtonWrapper } from '../../styles';
import { InputCheckbox } from '../Input';

export const Manufacturer = () => {

  const { filters, brands, isBrandLoading, applyCatalogFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [checkedState, setCheckedState] = useState<[] | boolean[]>([]);
  const [prevCheckedState, setPrevCheckedState] = useState<[] | boolean[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCheckedState(new Array(brands.length).fill(false));
  },[brands.length]);

  const handleApplyFilter = () => {
    router.push({
      query: {
        brands: filters.brands,
        categories: filters.categories,
        stock: filters.stock,
        price: filters.price,
      },
    }, undefined, { shallow: true });

    setPrevCheckedState(checkedState);
    applyCatalogFilter(0, filters, true);
    setButtonVisible(false);
  };

  return (
    <Div>
      {
        isBrandLoading
          ? <Skeleton rows={17}/>
          : (
            <>
              <H3>Manufacturer</H3>
              {
                brands.map((brand, i) => {
                  return (
                    <InputCheckbox
                      inputValue={brand}
                      checkedState={checkedState}
                      key={i}
                      index={i}
                      prevCheckedState={prevCheckedState}
                      handleButtonVisible={setButtonVisible}
                      handleCheckedState={setCheckedState}
                    />
                  );
                })
              }
            </>
          )
      }
      {
        isButtonVisible
        &&
        <ButtonWrapper>
          <Button
            bgColor={lightTheme.color_primary_0}
            bRadius="4px"
            textColor={lightTheme.color_neutral_1}
            type="button"
            fontSize="0.75rem"
            onClick={handleApplyFilter}
          >
            Apply
          </Button>
        </ButtonWrapper>
      }
    </Div>
  );
};

