import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CartContext } from 'context';
import { IProduct } from 'interfaces';
import { Rating } from '../RatingStars';
import { CartIcon, CheckIcon, TrashIcon } from 'components/icons';

import { AddToCartButton, IsInCartButton, RemoveFromCartButton, Div, H2, ImageWrapper, Header, InfoWrapper, Price, P, Span, Brand, Section, ImageContainer } from './styles';

interface Props {
  product: IProduct;
}

export const ProductListCard = ({ product }: Props) => {

  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [isInCart, setInCart] = useState(false);
  const [isButtonHover, setButtonHover] = useState(false);

  useEffect(() => {
    const isInCart = cart.some(p => p.id === product.id);
    setInCart(isInCart);
  },[cart, product.id]);

  const addProduct = () => {
    const productToAdd = { ...product, quantity: 1 };
    addToCart(productToAdd);
  };

  return (
    <Div>
      <ImageWrapper>
        <Link href={`/products/${product.id}`} passHref>
          <ImageContainer>
            <Image 
              src={product.image_urls[0] as string}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={product.image_urls[0] as string}
            />
          </ImageContainer>
        </Link>
        {
          isInCart
            ? (
              <div 
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
              >
                {
                  isButtonHover
                    ? (
                      <RemoveFromCartButton onClick={() => removeFromCart(product.id)}>
                        <TrashIcon
                          width="22px"
                          height="22px"
                          color="white"
                        />
                      </RemoveFromCartButton>
                    )
                    : (
                      <IsInCartButton>
                        <CheckIcon
                          width="22px"
                          height="22px"
                          color="white"
                        />
                      </IsInCartButton>
                    )
                }
              </div>
            )
            : (
              <AddToCartButton onClick={addProduct}>
                <CartIcon
                  width="22px"
                  height="22px"
                  color="white"
                />
              </AddToCartButton>
            )
        }
      </ImageWrapper>
      <InfoWrapper>
        <div>
          <Header>
            <Brand>
              {product.brand}
            </Brand>
          </Header>
          <Link href={`/products/${product.id}`} passHref>
            <H2>{product.title}</H2>
          </Link>
          <Section>
            <Rating rating={5} />
          </Section>
        </div>
        <Price>
          <P>${product.discount_price}</P>
          <Span>${product.price}</Span>
        </Price>
      </InfoWrapper>
    </Div>
  );
};
