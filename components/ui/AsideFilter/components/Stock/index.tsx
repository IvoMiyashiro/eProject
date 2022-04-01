import { ChangeEvent } from 'react';
import { Skeleton } from '../Skeleton';
import { Div, H3, Section, Label, Input } from '../../styles';

interface Props {
  handleStockInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

export const Stock = ({ handleStockInputChange, isLoading }: Props) => {
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
                    onChange={handleStockInputChange}
                  />
                  Exclude out of stock items. 
                </Label>
              </Section>
            </>
          )
      }
    </Div>
  );
};
