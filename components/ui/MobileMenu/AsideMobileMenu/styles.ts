import { bp } from 'styles/breakpoints';
import styled from 'styled-components';

interface Styles {
  isOpen: boolean;
}

export const Aside = styled.aside<Styles>`
  background-color: ${props => props.theme.color_primary_0};
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  height: 100%;
  padding: 1em;
  position: fixed;
  right: -275px;
  top: 0;
  transition: right 0.2s ease-in-out;
  width: 275px;
  z-index: 10;
  ${props => props.isOpen ? 'right: 0' : 'right: -275px'};

  @media (min-width: ${bp.tablet}) {
    display: none;
  }
`;

export const Section = styled.section`
  :nth-child(3) {
    padding-top: 1.5em;
    border-top: 1px solid ${props => props.theme.color_primary_2};
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  height: 45px;
`;
