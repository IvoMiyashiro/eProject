import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { IProduct } from 'interfaces';
import { updateProduct } from 'services';

import { Modal, Spinner, ConfirmTab, Switch } from 'components/ui';
import { DotsIcon, EditIcon } from 'components/icons';
import { StockForm } from '../StockForm';
import { PriceForm } from '../PriceForm';

import { lightTheme } from 'styles';
import { Td, Tr } from '../../styles';
import { Button, ImageWrapper, LastTd, Li, P, Ul, Wrapper } from '../../CustomerReviewsTable/TableRow/styles';
import { FirstTd, Menu, Text, IconButton } from './styles';

interface Props {
  product: IProduct;
}

export const TableRow = ({ product }: Props) => {

  const [stock, setStock] = useState(product.stock.toString());
  const [price, setPrice] = useState(product.price);
  const [isActive, setActive] = useState((product.status === 'active') ? true : false);
  const [isTooltipStockOpen, setTooltipStockOpen] = useState(false);
  const [isTooltipPriceOpen, setTooltipPriceOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleDeleteProduct = async () => {
    setLoading(true);
    setDeleteModalOpen(false);
  };

  const handleToggleSwitch = async () => {
    setActive(prev => !prev);
    if (!isActive) {
      return await updateProduct({ ...product, status: 'active' });
    }
    
    await updateProduct({ ...product, status: 'inactive' });
  };

  return (
    <Tr>
      <Link href={`/products/${product.id}`} passHref>
        <FirstTd>
          <ImageWrapper>
            <Image 
              alt={product.title}
              src={product.image_urls[0]}
              layout="fill"
              objectFit="contain"
            />
          </ImageWrapper>
          <P>{product.title}</P> 
        </FirstTd>
      </Link>

      <Td>
        <Switch
          id={product.id}
          isOn={isActive}
          handleToggle={handleToggleSwitch} 
        />
      </Td>

      <Td> 
        <Text>{stock}</Text>
        <IconButton onClick={() => setTooltipStockOpen(true)}>
          <EditIcon width="18px" height="18px" />
        </IconButton>
        <StockForm
          product={product}
          isOpen={isTooltipStockOpen}
          value={stock}
          closeTooltip={() => setTooltipStockOpen(false)}
          handleStock={setStock}
        />
      </Td>

      <Td> 
        <Text>${price.toLocaleString()}</Text>
        <IconButton onClick={() => setTooltipPriceOpen(true)}>
          <EditIcon width="18px" height="18px" />
        </IconButton>
        <PriceForm 
          product={product}
          isOpen={isTooltipPriceOpen}
          value={price}
          closeTooltip={() => setTooltipPriceOpen(false)}
          handlePrice={setPrice}
        />
      </Td>

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
                  <Li onClick={() => {router.push(`/dashboard/products/${ product.id }`); setMenuOpen(false);}}>Edit</Li>
                  <Li onClick={() => {setDeleteModalOpen(true); setMenuOpen(false);}}>Delete</Li>
                  <Li onClick={() => setMenuOpen(false)}>Cancel</Li>
                </Ul>
              </Menu>
            </>
        }
        {
          isDeleteModalOpen
          &&
          <Modal
            handleCloseChildren={() => setDeleteModalOpen(false)}
          >
            <ConfirmTab
              isOpen={isDeleteModalOpen}
              handleOpen={setDeleteModalOpen}
              title="Delete product?"
              text="If you delete this product no one will be able to see it again. Are you sure you want to do it?"
              mainButtonColor={lightTheme.color_ui_danger}
              mainButtonTextColor={lightTheme.color_ui_text_contrast}
              mainButtonChildren={
                isLoading 
                  ? <Spinner size="14px" color={lightTheme.color_ui_text_contrast} />
                  : 'Confirm'
              }
              onConfirm={handleDeleteProduct}
              onCancel={() => setDeleteModalOpen(false)}
            />
          </Modal>
        }
      </LastTd>
    </Tr>
  );
};
