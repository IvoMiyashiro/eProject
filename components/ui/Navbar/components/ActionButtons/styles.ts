import styled from 'styled-components';
import { bp } from 'styles';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  margin: 0;
  padding: 0;
  position: relative;

  @media (max-width: ${bp.tablet}) {
    display: none;
  }
`;

export const LastButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  display: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${bp.tablet}) {
    display: block;
  }
`;

export const CartItemsCounter = styled.div`
  background-color: ${props => props.theme.color_tertiary_0};
  border-radius: 50%;
  border: none;
  color: ${props => props.theme.color_ui_text_main};
  font-size: 0.6rem;
  padding: 0.3em 0.5em;
  position: absolute;
  right: -5px;
  top: -8px;
`;
