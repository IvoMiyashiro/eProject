import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IProduct } from 'interfaces';
import { CartContext } from 'context';
import { Rating } from 'components/ui';
import { CartIcon, CheckIcon, TrashIcon } from 'components/icons';

import { AddToCartButton, Header, Div, ImageWrapper, InfoWrapper, Title, H2, Price, P, Span, Brand, ImageContainer, RemoveFromCartButton, IsInCartButton } from './styles';

interface Props { product: IProduct; }

const ProductGridCard = ({ product }: Props) => {

  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [isInCart, setInCart] = useState(false);
  const [isButtonHover, setButtonHover] = useState(false);

  const addProduct = () => {
    const productToAdd = { ...product, quantity: 1 };
    addToCart(productToAdd);
  };

  useEffect(() => {
    const isInCart = cart.some(p => p.id === product.id);
    setInCart(isInCart);
  },[cart, product.id]);

  return (
    <Div>
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
      <Link href={`/products/${product.id}`} passHref>
        <ImageWrapper>
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
        </ImageWrapper>
      </Link>
      <InfoWrapper>
        <Header>
          <Brand>
            {product.brand}
          </Brand>
          {
            !!product.rating
            &&
            <Rating rating={product.rating} />
          }
        </Header>
        <Link href={`/products/${product.id}`} passHref>
          <Title>
            <H2>{product.title}</H2>
          </Title>
        </Link>
        <Price>
          <P>${product.discount_price}</P>
          <Span>${product.price}</Span>
        </Price>
      </InfoWrapper>
    </Div>
  );
};

export default React.memo(ProductGridCard);
