import { useBestSellers } from 'hooks';
import { ProductBestSellerCard } from 'components/ui';
import { H2, Wrapper } from '../styles';

export const TopProducts = () => {

  const limit = 3;
  const { products } = useBestSellers({ limit });

  return (
    <>
      {
        products?.length !== 0
        &&
        <Wrapper>
          <H2>Top { limit } products</H2>
          {
            products.map(({ id, title, total_sold, image_urls }) => {
              return (
                <ProductBestSellerCard
                  key={id}
                  id={id}
                  title={title}
                  total_sold={total_sold}
                  image_url={image_urls[0]}
                />
              );
            })
          }
        </Wrapper>
      }
    </>
  );
};
