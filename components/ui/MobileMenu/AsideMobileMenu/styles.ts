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

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  list-style: none;
`;

export const Wrapper = styled.div`
  align-items: center;
  border-radius: 4px;
  color: ${props => props.theme.color_ui_text_contrast};
  cursor: pointer;
  display: flex;
  gap: 0.75em;
  padding: 0.5em;
  transition: 0.2s;
  width: 100%;

  :hover {
    background-color: ${props => props.theme.color_primary_1};
    transition: 0.2s;
  }
`;

export const Li = styled.li``;

export const P = styled.p`
  font-size: 0.9rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  height: 45px;
`;

export const CustomerCardWrapper = styled.div`
  background-color: ${props => props.theme.color_primary_1};
  border-radius: 4px;
  cursor: pointer;
  margin-top: auto;
  padding: 0.5em;
`;
