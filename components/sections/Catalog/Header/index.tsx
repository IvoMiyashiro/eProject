import { ChangeEvent, useContext } from 'react';

import { array } from 'utils';
import { CatalogContext } from 'context';

import { GridIcon, ListIcon } from 'components/icons';
import { Div, Button, Wrapper, Label, Select, Option, Section } from './styles';

export const Header = () => {

  const { productList, sortCatalog } = useContext(CatalogContext);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === 'Lowest Price') {
      const newProductList = productList.sort((a, b) => a.discount_price - b.discount_price);
      sortCatalog(newProductList);

    } else if (value === 'Highest Price') {
      const newProductList = productList.sort((a, b) => b.discount_price - a.discount_price);
      sortCatalog(newProductList);

    } else if (value === 'A - Z') {
      const newProductList = productList.sort(array.sortAtoZ);
      sortCatalog(newProductList);
      
    } else if (value === 'Z - A') {
      const newProductList = productList.sort(array.sortZtoA);
      sortCatalog(newProductList);
    } 
  };

  return (
    <Div>
      <Section>
        <Button>
          <GridIcon width="22px" height="20px" />
        </Button>
        <Button>
          <ListIcon width="22px" height="22px" />
        </Button>
      </Section>
      <Wrapper>
        <Label>Sort by:</Label>
        <Select onChange={handleSelectChange}>
          <Option>Highest Price</Option>
          <Option>Lowest Price</Option>
          <Option>A - Z</Option>
          <Option>Z - A</Option>
        </Select>
      </Wrapper>
    </Div>
  );
};
