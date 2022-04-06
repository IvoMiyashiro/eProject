import { useContext, useState } from 'react';

import { CatalogContext } from 'context';
import { Skeleton, Input } from '../';
import { Button } from 'components/ui/Button';

import { lightTheme } from 'styles';
import { Div, H3, ButtonWrapper } from '../../styles';

export const Manufacturer = () => {

  const { filters, brands, isLoading, applyCatalogFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);

  return (
    <Div>
      {
        isLoading
          ? <Skeleton rows={17}/>
          : (
            <>
              <H3>Manufacturer</H3>
              {
                brands.map((brand, i) => {
                  return (
                    <Input 
                      key={i}
                      data={brand}
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
            onClick={() => {applyCatalogFilter(0, filters); setButtonVisible(false);}}
          >
            Apply
          </Button>
        </ButtonWrapper>
      }
    </Div>
  );
};

