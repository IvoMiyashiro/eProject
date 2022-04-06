import { useContext, useState } from 'react';

import { CatalogContext } from 'context';
import { Input, Skeleton } from '../';
import { Button } from 'components/ui/Button';

import { lightTheme } from 'styles';
import { Div, H3, ButtonWrapper } from '../../styles';

export const Categories = () => {
  
  const { filters, categories, isLoading, applyCatalogFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);

  return (
    <Div>
      {
        isLoading
          ? <Skeleton rows={8}/>
          : (
            <>
              <H3>Categories</H3>
              {
                categories.map((category, i) => {
                  return (
                    <Input
                      key={i}
                      data={category}
                      handleButtonVisible={setButtonVisible}
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
            bgColor={lightTheme.color_tertiary_0}
            bRadius="4px"
            textColor={lightTheme.color_ui_text_main}
            type="button"
            fontSize="0.75rem"
            onClick={() => {applyCatalogFilter(filters); setButtonVisible(false);}}
          >
            Apply
          </Button>
        </ButtonWrapper>
      }
    </Div>
  );
};
