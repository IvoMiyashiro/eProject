import { ChangeEvent, useContext } from 'react';

import { array } from 'utils';
import { CatalogContext } from 'context';
import { GridIcon, ListIcon, FilterIcon } from 'components/icons';

import { lightTheme } from 'styles';
import { Div, Button, Wrapper, Label, Select, Option, Section } from './styles';

export const Header = () => {

  const { 
    productList,
    display,
    sortCatalog,
    changeDisplayToGrid,
    changeDisplayToList,
    toggleFilterMenu
  } = useContext(CatalogContext);

  const gridIconColor = display === 'grid' ? lightTheme.color_primary_0.toString() : '';
  const listIconColor = display === 'list' ? lightTheme.color_primary_0.toString() : '';

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
        <Button onClick={changeDisplayToGrid}>
          <GridIcon width="22px" height="20px" color={ gridIconColor }/>
        </Button>
        <Button onClick={changeDisplayToList}>
          <ListIcon width="22px" height="22px" color={ listIconColor }/>
        </Button>
        <Button onClick={toggleFilterMenu}>
          <FilterIcon width="22px" height="22px" />
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
