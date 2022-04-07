import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { array } from 'utils';

import { CatalogContext } from 'context';
import { Skeleton } from '../';
import { Button } from 'components/ui/Button';

import { lightTheme } from 'styles';
import { Div, H3, ButtonWrapper, Section, Label, Input } from '../../styles';
import { CategoryList } from 'interfaces';

export const Categories = () => {
  
  const { filters, categories, isCategoryLoading, applyCatalogFilter, updateCategoriesFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [checkedState, setCheckedState] = useState([false]);
  const [prevCheckedState, setPrevCheckedState] = useState<[] | boolean[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCheckedState(new Array(categories.length).fill(false));
  },[categories.length]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, position: number) => {
    updateCategoriesFilter(e.target.value as CategoryList);
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
        isCategoryLoading
          ? <Skeleton rows={8}/>
          : (
            <>
              <H3>Categories</H3>
              {
                categories.map((category, i) => {
                  return (
                    <Section key={i}>
                      <Label>
                        <Input
                          type="checkbox"
                          value={category}
                          onChange={(e) => handleOnChange(e, i)}
                          checked={checkedState[i]}
                        />
                        {category}
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
