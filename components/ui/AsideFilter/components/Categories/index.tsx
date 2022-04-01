import { ChangeEvent } from 'react';

import { CategoryList } from 'interfaces';
import { Div, H3, Section, Label, Input } from '../../styles';
import { Skeleton } from '../Skeleton';

interface Props {
  handleCategInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  categories: CategoryList[];
  isLoading: boolean;
}

export const Categories = ({ handleCategInputChange, categories, isLoading }: Props) => {
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
                    <Section key={i}>
                      <Label>
                        <Input
                          type="checkbox"
                          value={category}
                          onChange={handleCategInputChange}
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
    </Div>
  );
};
