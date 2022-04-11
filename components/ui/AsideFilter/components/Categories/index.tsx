import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { CatalogContext } from 'context';
import { Skeleton } from '../';
import { Button } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, H3, ButtonWrapper } from '../../styles';
import { InputCheckbox } from '../Input';

export const Categories = () => {
  
  const { filters, categories, isCategoryLoading, applyCatalogFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [checkedState, setCheckedState] = useState<[] | boolean[]>([]);
  const [prevCheckedState, setPrevCheckedState] = useState<[] | boolean[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCheckedState(new Array(categories.length).fill(false));
  },[categories.length]);

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
        isCategoryLoading
          ? <Skeleton rows={8}/>
          : (
            <>
              <H3>Categories</H3>
              {/* {
                categories.map((category, i) => {
                  return (
                    <InputCheckbox
                      inputValue={category}
                      checkedState={checkedState}
                      key={i}
                      index={i}
                      prevCheckedState={prevCheckedState}
                      handleButtonVisible={setButtonVisible}
                      handleCheckedState={setCheckedState}
                    />
                  );
                })
              } */}
            </>
          )
      }
      {
        isButtonVisible
        &&
        <ButtonWrapper>
          <Button
            bgColor={lightTheme.color_tertiary_0}
            bRadius="4px"
            textColor={lightTheme.color_ui_text_main}
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
