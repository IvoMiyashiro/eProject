import type { NextPage } from 'next';

import { MainLayout } from 'components/layouts';
import { Catalog } from 'components/sections';

import { IProduct } from 'interfaces';
import styled from 'styled-components';

const ProductsPage: NextPage = () => {

  const productList: IProduct[] = [
    {
      id: '1',
      title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
      category: 'Video Cards',
      quantity: 1,
      price: 1000,
      discountPrice: 500,
      brand: 'GIGABYTE',
      imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    },
    {
      id: '2',
      title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
      category: 'Video Cards',
      quantity: 1,
      price: 1000,
      discountPrice: 500,
      brand: 'GIGABYTE',
      imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    },
    {
      id: '3',
      title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
      category: 'Video Cards',
      quantity: 1,
      price: 1000,
      discountPrice: 500,
      brand: 'GIGABYTE',
      imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    },
    {
      id: '4',
      title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
      category: 'Video Cards',
      quantity: 1,
      price: 1000,
      discountPrice: 500,
      brand: 'GIGABYTE',
      imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    },
    {
      id: '5',
      title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
      category: 'Video Cards',
      quantity: 1,
      price: 1000,
      discountPrice: 500,
      brand: 'GIGABYTE',
      imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    },
    {
      id: '6',
      title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
      category: 'Video Cards',
      quantity: 1,
      price: 1000,
      discountPrice: 500,
      brand: 'GIGABYTE',
      imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    },
    {
      id: '7',
      title: 'GIGABYTE Eagle OC GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 ATX Video Card GV-N306TEAGLE OC-8GD (rev. 2.0) (LHR)',
      category: 'Video Cards',
      quantity: 1,
      price: 1000,
      discountPrice: 500,
      brand: 'GIGABYTE',
      imageUrl: 'https://i.ibb.co/ZL76FZ9/gigabyte-rtx-3070-removebg-preview.png'
    },
  ];

  return (
    <MainLayout title="eProject | Our Products" description="">
      <Div>
        <Section>
          <Wrapper>
            <H1>Our Products</H1>
            <Underline />
          </Wrapper>
        </Section>
        <Catalog productList={productList}/>
      </Div>
    </MainLayout>
  );
};

export default ProductsPage;

const Div = styled.div`
  padding: 7em 0;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
`;
  
const H1 = styled.h1`
  font-size: 2.5rem;
`;
  
const Underline = styled.span`
  width: 100%;
  height: 10px;
  background-color: ${props => props.theme.color_tertiary_0};
  position: absolute;
  bottom: -5px;
  transform: rotate(-1deg);
`;

const Wrapper = styled.div`
  position: relative;
  display: inline;
`;
