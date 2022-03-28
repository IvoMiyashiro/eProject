import { ReactChild } from 'react';
import Link from 'next/link';

import styled from 'styled-components';

interface Props {
  bgColor: string;
  children: ReactChild;
  textColor: string;
  bRadius?: string;
  height?: string;
  href?: string;
  isLink?: boolean;
  width?: string;
}

export const Button = ({ 
  isLink = false,
  href = '',
  children,
  textColor,
  bgColor,
  bRadius = '0px',
  width = '100%',
  height = '100%' 
}: Props) => {
  return (
    <>
      {
        isLink
          ? (
            <Link href={href} passHref>
              <ButtonWrapper color={textColor} bgColor={bgColor} bRadius={bRadius} width={width} height={height}>
                { children }
              </ButtonWrapper>
            </Link>
          )
          : (
            <ButtonWrapper color={textColor} bgColor={bgColor} bRadius={bRadius} width={width} height={height}>
              { children}
            </ButtonWrapper>
          )
      }
    </>

  );
};

interface Styles {
  bgColor: string;
  bRadius: string;
  width: string;
  height: string;
}

const ButtonWrapper = styled.button<Styles>`
  align-items: center;
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: ${props => props.bRadius};
  color: ${props => props.color};
  display: flex;
  height: ${props => props.height};
  justify-content: center;
  width: ${props => props.width};
`;
