import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import { Modal } from 'components/ui';
import { DotsIcon } from 'components/icons';
import { ReviewInfo } from '../ReviewInfo';
import { DeleteReviewForm } from '../DeleteReviewForm';

import { Td, Tr } from '../../styles';
import { Button, FirstTd, ImageWrapper, LastTd, Li, Menu, P, Ul, Wrapper } from './styles';

interface Props {
  review_id: string;
  product_id: string;
  title: string;
  created_at: Date;
  rating: string;
  image_url: string;
  pros: string;
  cons: string;
  overall: string;
}

export const TableRow = ({ review_id, product_id, title, created_at, rating, image_url, pros, cons, overall }: Props) => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);

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
                <Li onClick={() => {setReviewModalOpen(true); setMenuOpen(false);}}>See more</Li>
                <Li onClick={() => {setDeleteModalOpen(true); setMenuOpen(false);}}>Delete</Li>
              </Ul>
            </Menu>
          </>
        }
        {
          isReviewModalOpen
          &&
          <Modal
            handleCloseChildren={() => setReviewModalOpen(false)}
          >
            <ReviewInfo 
              rating={Number(rating)}
              pros={pros}
              cons={cons}
              overall={overall}
              handleDeleteModalOpen={setDeleteModalOpen}
            />
          </Modal>
        }
        {
          isDeleteModalOpen
          &&
          <Modal
            handleCloseChildren={() => setDeleteModalOpen(false)}
          >
            <DeleteReviewForm
              review_id={review_id}
              product_id={product_id}
              handleDeleteModalOpen={setDeleteModalOpen}
              handleReviewModalOpen={setReviewModalOpen}
            />
          </Modal>
        }
      </LastTd>
    </Tr>
  );
};
