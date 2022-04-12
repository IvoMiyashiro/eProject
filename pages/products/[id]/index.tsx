import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import { getProducts, getProductById, getProductSpecs, getProductReviews } from 'services';

import { IProduct ,IReviews, ISpecs } from 'interfaces';
import { CatalogProvider } from 'context';
import { MainLayout, MapLinks, Product } from 'components';

interface Props {
  product: IProduct;
  specs: ISpecs;
}

const ProductPage: NextPage<Props> = ({ product, specs }) => {

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
          <Product product={ product } specs={specs} />
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

  const specs = await getProductSpecs(id);

  return {
    props: {
      product: product[0],
      specs: specs[0],
    },
    revalidate: 86400
  };
};

export const Wrapper = styled.div`
  padding: 6em 0;
`;
