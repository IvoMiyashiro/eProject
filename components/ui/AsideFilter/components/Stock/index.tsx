import { useContext, useState } from 'react';

import { CatalogContext } from 'context';
import { Skeleton } from '../Skeleton';
import { Button } from 'components/ui/Button';

import { Div, H3, Section, Label, Input, ButtonWrapper } from '../../styles';
import { lightTheme } from 'styles';

export const Stock = () => {

  const { isBrandLoading, updateStockFilter } = useContext(CatalogContext);
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
            onClick={() => {setButtonVisible(false);}}
          >
            Apply
          </Button>
        </ButtonWrapper>
      }
    </Div>
  );
};
