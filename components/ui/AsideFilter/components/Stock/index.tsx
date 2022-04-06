import { useContext, useState } from 'react';

import { CatalogContext } from 'context';
import { Skeleton } from '../Skeleton';
import { Button } from 'components/ui/Button';

import { Div, H3, Section, Label, Input, ButtonWrapper } from '../../styles';
import { lightTheme } from 'styles';

export const Stock = () => {

  const { filters, isLoading, updateStockFilter, applyCatalogFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleInputChange = () => {
    updateStockFilter();
    setButtonVisible(prev => !prev);
    setChecked(prev => !prev);
  };

  return (
    <Div>
      {
        isLoading
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
