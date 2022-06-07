import { useState } from 'react';

import { useProducts } from 'hooks';

import { EyeIcon, SortIcon } from 'components/icons';
import { Searchbar } from 'components/sections/CustomerOrders/Searchbar';
import { InputSelectIcon, Button, ProductsTable, Pagination } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, Wrapper } from './styles';

export const ProductsDashboard = () => {

  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [sortBy, setSortBy] = useState('Highest Price');
  const { productsList, isLoading, totalCount } = useProducts({ limit, offset, search });

  const handlePageClick = (pageNumber: number) => {
    if (isLoading) return;
    const newOffset = ((pageNumber - 1) * limit) % totalCount;
    setCurrentPage(pageNumber);
    setOffset(newOffset);
  };

  return (
    <Div>
      <Wrapper>
        <Searchbar
          placeholder="Type a product name..."
          handleSearchOrders={setSearch}
        />
        <InputSelectIcon 
          icon={EyeIcon}
          values={['10', '20', '30']}
          name="products-quantity"
          onChange={setLimit}
        />
        <InputSelectIcon 
          icon={SortIcon}
          values={['Highest price', 'Lowest price', 'A - Z', 'Z - A']}
          name="sort-products"
          onChange={setSortBy}
        />
        <Button
          bgColor={lightTheme.color_primary_0}
          textColor={lightTheme.color_ui_text_contrast}
          bRadius="6px"
          isLink
          href='/dashboard/products/new'
        >
          New Product
        </Button>
      </Wrapper>
      <ProductsTable 
        products={productsList}
        isLoading={isLoading}
      />
      <Pagination
        name="Products"
        offset={offset}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={limit}
        onPageChange={handlePageClick}
      />
    </Div>
  );
};
