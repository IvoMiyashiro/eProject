import { ChangeEvent } from 'react';

import { BrandList } from 'interfaces';
import { Div, H3, Section, Label, Input } from '../../styles';
import { Skeleton } from '../Skeleton';

interface Props {
  handleBrandsInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  brands: BrandList[];
  isLoading: boolean;
}

export const Manufacturer = ({ handleBrandsInputChange, brands, isLoading }: Props) => {
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
                    <Section key={i}>
                      <Label>
                        <Input
                          type="checkbox"
                          value={brand}
                          onChange={handleBrandsInputChange}
                        />
                        {brand}
                      </Label>
                    </Section>
                  );
                })
              }
            </>
          )
      }
    </Div>
  );
};
