import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getProducts, getProductById } from 'services';

import { IProduct } from 'interfaces';
import { CatalogProvider } from 'context';
import { MainLayout, MapLinks, Product } from 'components';

import styled from 'styled-components';

interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {

  const links = [
    {
      name: 'Home',
      link: '/'
    },{
      name: 'Products',
      link: '/products'
    },{
      name: `${product.title}`,
      link: `/products/${product.title}`
    }
  ];

  return (
    <CatalogProvider>
      <MainLayout title={product.title + ' | eProyect'} description={product.title}>
        <Wrapper>
          <MapLinks 
            links={links}
          />
          <Product product={ product }/>
        </Wrapper>
      </MainLayout>
    </CatalogProvider>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const productSlugs = await getProducts();

  return {
    paths: productSlugs.map(({ id }) => ({
      params: {
        id
      }
    })),
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id = '' } = params as { id: string };
  const product = await getProductById(id);

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      product: product[0]
    },
    revalidate: 60 * 60 * 24
  };
};

export const Wrapper = styled.div`
  padding: 7em 0;
`;
