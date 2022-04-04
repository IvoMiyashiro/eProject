import styled from 'styled-components';
import { bp } from 'styles/breakpoints';

interface Styles {
  align: string;
  justify: string;
  isMobile: boolean;
}

const mobile = `
  @media (min-width: ${bp.tablet}) {
    display: none;
  }
`;

export const Div = styled.div<Styles>`
  align-items: ${props => props.align};
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100vh;
  justify-content: ${props => props.justify};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  ${props => props.isMobile ? mobile : ''};
`;
