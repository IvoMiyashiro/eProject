import styled from 'styled-components';
import { bp } from 'styles';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  margin: 0;
  padding: 0;

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
