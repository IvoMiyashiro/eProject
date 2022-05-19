import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import { DotsIcon } from 'components/icons';

import { Td, Tr } from '../../styles';
import { Button, FirstTd, ImageWrapper, LastTd, Li, Menu, P, Ul, Wrapper } from './styles';

interface Props {
  product_id: string;
  title: string;
  created_at: Date;
  rating: string;
  image_url: string;
}

export const TableRow = ({ product_id, title, created_at, rating, image_url }: Props) => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Tr>
      <Link href={`/products/${product_id}`} passHref>
        <FirstTd>
          <ImageWrapper>
            <Image 
              alt={title}
              src={image_url}
              layout="fill"
              objectFit="contain"
            />
          </ImageWrapper>
          <P>{title}</P> 
        </FirstTd>
      </Link>
      <Td> { dayjs(created_at).format('MMM D, h:mm A') } </Td>
      <Td> {rating} </Td>
      <LastTd>
        <Button onClick={() => setMenuOpen(true)}>
          <DotsIcon width="24px" height="24px" />
        </Button>
        {
          isMenuOpen
          &&
          <>
            <Wrapper onClick={() => setMenuOpen(false)}/>
            <Menu>
              <Ul>
                <Li>See more</Li>
                <Li>Delete</Li>
              </Ul>
            </Menu>
          </>
        }
      </LastTd>
    </Tr>
  );
};
