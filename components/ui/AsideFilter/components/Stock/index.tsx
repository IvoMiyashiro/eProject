import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { CatalogContext } from 'context';
import { Skeleton } from '../Skeleton';
import { Button } from 'components/ui/Button';

import { lightTheme } from 'styles';
import { Div, H3, Section, Label, Input, ButtonWrapper } from '../../styles';

export const Stock = () => {
  const { isBrandLoading, filters, updateStockFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if ((filters.stock as any) === 'true') {
      setChecked(true);
    }
  }, [filters.stock]);

  const handleInputChange = () => {
    updateStockFilter();
    setButtonVisible(prev => !prev);
    setChecked(prev => !prev);
  };

  const handleApplyFilter = () => {
    if (!filters.stock && !!!filters.search) {
      router.push({
        query: {
          brands: filters.brands,
          categories: filters.categories,
          price: filters.price,
        },
      }, undefined, { shallow: true });
    } else if (filters.stock && !!!filters.search) {
      router.push({
        query: {
          brands: filters.brands,
          categories: filters.categories,
          stock: filters.stock,
          price: filters.price,
        },
      }, undefined, { shallow: true });
    } else if (!filters.stock && filters.search) {
      router.push({
        query: {
          brands: filters.brands,
          categories: filters.categories,
          price: filters.price,
          search: router.query.search
        },
      }, undefined, { shallow: true });
    } else {
      router.push({
        query: {
          brands: filters.brands,
          categories: filters.categories,
          stock: filters.stock,
          price: filters.price,
          search: router.query.search
        },
      }, undefined, { shallow: true });
    }

    setButtonVisible(false);
  };

  return (
    <Div>
      {
        isBrandLoading
          ? <Skeleton rows={1}/>
          : (
            <>
              <H3>Stock</H3>
              <Section>
                <Label>           
                  <Input 
                    type="checkbox"
                    onChange={handleInputChange}
                    checked={isChecked}
                  />
                  Exclude out of stock items. 
                </Label>
              </Section>
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
