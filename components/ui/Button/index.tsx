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
  fontSize?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: any;
}

export const Button = ({ 
  isLink = false,
  href = '',
  children,
  textColor,
  bgColor,
  bRadius = '0px',
  width = '100%',
  height = '100%',
  fontSize = '0.8rem',
  type = 'button',
  disabled = false,
  onClick
}: Props) => {
  return (
    <>
      {
        isLink
          ? (
            <Link href={href} passHref>
              <ButtonWrapper color={textColor} bgColor={bgColor} bRadius={bRadius} width={width} height={height} fontSize={fontSize} disabled={disabled}>
                { children }
              </ButtonWrapper>
            </Link>
          )
          : (
            <ButtonWrapper type={type} onClick={onClick} color={textColor} bgColor={bgColor} bRadius={bRadius} width={width} height={height} fontSize={fontSize} disabled={disabled}>
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
  fontSize: string;
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
  font-size: ${props => props.fontSize};

  :disabled {
    background-color: ${props => props.bgColor + '99'};
  }
`;
