import styled from 'styled-components';

interface Styles {
  isOpen: boolean;
}

export const Div = styled.div<Styles>`
  background-color: ${props => props.theme.color_primary_0};
  height: 100%;
  position: fixed;
  top: 0;
  right: -275px;
  transition: right 0.2s ease-in-out;
  width: 275px;
  z-index: 10;
  ${props => props.isOpen ? 'right: 0' : 'right: -275px'};
`;

export const Section = styled.section``;

export const Ul = styled.ul``;

export const Wrapper = styled.div``;

export const Li = styled.li``;

export const P = styled.p``;
