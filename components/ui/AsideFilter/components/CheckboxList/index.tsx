import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { BrandList, CategoryList } from 'interfaces';
import { CatalogContext } from 'context';
import { Button } from 'components/ui/Button';
import { InputCheckbox } from '../Input';
import { Skeleton } from '../';

import { lightTheme } from 'styles';
import { Div, H3, ButtonWrapper } from '../../styles';

interface Props {
  list: BrandList[] | CategoryList[];
  title: string;
  rows: number;
  isLoading: boolean;
  handleUpdateFilters: any;
}

export const CheckboxList = ({ list, title, rows, isLoading, handleUpdateFilters }: Props) => {

  const { filters } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [checkedState, setCheckedState] = useState<[] | boolean[]>([]);
  const [prevCheckedState, setPrevCheckedState] = useState<[] | boolean[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCheckedState(new Array(list.length).fill(false));
  },[list.length]);

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
    setButtonVisible(false);
  };

  return (
    <Div>
      {
        isLoading
          ? <Skeleton rows={rows}/>
          : (
            <>
              <H3>{ title }</H3>
              {
                list.map((value, i) => {
                  return (
                    <InputCheckbox
                      inputValue={value}
                      checkedState={checkedState}
                      key={i}
                      index={i}
                      prevCheckedState={prevCheckedState}
                      handleButtonVisible={setButtonVisible}
                      handleCheckedState={setCheckedState}
                      handleUpdateFilters={handleUpdateFilters}
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
            textColor={lightTheme.color_ui_background}
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

