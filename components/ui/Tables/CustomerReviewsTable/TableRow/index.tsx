import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import { CustomerReviewsContext } from 'context';

import { Modal, Spinner, ConfirmTab } from 'components/ui';
import { DotsIcon } from 'components/icons';
import { ReviewInfo } from '../ReviewInfo';

import { lightTheme } from 'styles';
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

  const { deleteReview } = useContext(CustomerReviewsContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleDeleteReview = async () => {
    setLoading(true);
    await deleteReview(product_id, review_id);
    setDeleteModalOpen(false);
    setReviewModalOpen(false);
  };

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
            <ConfirmTab
              title="Delete review?"
              text="If you delete this review no one will be able to read it again. Are you sure you want to do it?"
              mainButtonColor={lightTheme.color_ui_danger}
              mainButtonTextColor={lightTheme.color_ui_text_contrast}
              mainButtonChildren={
                isLoading 
                  ? <Spinner size="14px" color={lightTheme.color_ui_text_contrast} />
                  : 'Confirm'
              }
              onConfirm={handleDeleteReview}
              onCancel={() => setDeleteModalOpen(false)}
            />
          </Modal>
        }
      </LastTd>
    </Tr>
  );
};
