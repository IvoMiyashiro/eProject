import { ChangeEvent, useContext, useState } from 'react';

import { array } from 'utils';

import { Button } from 'components/ui';
import { PriceRange } from './PriceRange';
import { CatalogContext } from 'context';

import { Aside, Div, H3, Section, Input, Label, Wrapper } from './styles';
import { lightTheme } from 'styles';

export const AsideFilter = () => {

  const {categories, brands, applyCatalogFilter} = useContext(CatalogContext);
  const [categoriesQuery, setCategoriesQuery] = useState<string[]>([]);
  const [brandsQuery, setBrandsQuery] = useState<string[]>([]);
  // const [categoriesQuery, setCategoriesQuery] = useState<string[]>([]);

  const handleCategInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    if (!categoriesQuery.includes(value)) {
      setCategoriesQuery(prev => ([
        ...prev,
        e.target.value
      ]));
    } else {
      const newQueryArr: string[] = array.remove(categoriesQuery, value);
      setCategoriesQuery(newQueryArr);
    }
  };

  const handleBrandsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    if (!categoriesQuery.includes(value)) {
      setBrandsQuery(prev => ([
        ...prev,
        e.target.value
      ]));
    } else {
      const newQueryArr: string[] = array.remove(categoriesQuery, value);
      setBrandsQuery(newQueryArr);
    }
  };

  const applyFilters = () => {
    const categoryQuery = encodeURIComponent(JSON.stringify(categoriesQuery));
    const brandQuery = encodeURIComponent(JSON.stringify(brandsQuery));
    applyCatalogFilter(categoryQuery, brandQuery);
  };

  const resetFilters = () => {
    
  };

  return (
    <Aside>
      <Div>
        <H3>Stock</H3>
        <Section>
          <Label>           
            <Input 
              type="checkbox"
            />
              Exclude out of stock items. 
          </Label>
        </Section>
      </Div>
      <Div>
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
      </Div>
      <Div>
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
      </Div>
      <PriceRange />
      <Wrapper>
        <Button
          bgColor={lightTheme.color_neutral_2}
          textColor={lightTheme.color_ui_text_contrast}
          bRadius="4px"
          onClick={resetFilters}
        >
          Reset
        </Button>
        <Button
          bgColor={lightTheme.color_primary_0}
          textColor={lightTheme.color_ui_text_contrast}
          bRadius="4px"
          onClick={applyFilters}
        >
          Apply
        </Button>
      </Wrapper>
    </Aside>
  );
};

