import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { array } from 'utils';

import { BrandList } from 'interfaces';
import { CatalogContext } from 'context';
import { Skeleton } from '../';
import { Button } from 'components/ui/Button';

import { lightTheme } from 'styles';
import { Div, H3, ButtonWrapper, Section, Label, Input } from '../../styles';

export const Manufacturer = () => {

  const { filters, brands, isBrandLoading, applyCatalogFilter, updateBrandsFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [checkedState, setCheckedState] = useState<[] | boolean[]>([]);
  const [prevCheckedState, setPrevCheckedState] = useState<[] | boolean[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCheckedState(new Array(brands.length).fill(false));
  },[brands.length]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, position: number) => {
    updateBrandsFilter(e.target.value as BrandList);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedState(updatedCheckedState);

    if (prevCheckedState.length === 0) {
      if (!updatedCheckedState.includes(true)) return setButtonVisible(false);
      return setButtonVisible(true);
    }

    if (array.arraysEqual(prevCheckedState, updatedCheckedState)) {
      return setButtonVisible(false);
    }
    return setButtonVisible(true);
  };

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
                    <Section key={i}>
                      <Label>
                        <Input
                          type="checkbox"
                          value={ brand }
                          onChange={(e) => handleOnChange(e, i)}
                          checked={checkedState[i]}
                        />
                        { brand }
                      </Label>
                    </Section>
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

