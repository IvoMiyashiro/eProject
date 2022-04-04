import styled from 'styled-components';

interface Styles {
  isOpen: boolean;
}

export const Aside = styled.aside<Styles>`
  background-color: ${props => props.theme.color_ui_background};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 0;
  transition: right 0.2s ease-in-out;
  width: 360px;
  z-index: 10;
  ${props => props.isOpen ? 'right: 0' : 'right: -360px'};
`;

export const Header = styled.header`
  border-bottom: 1px solid ${props => props.theme.color_neutral_0};
  padding: 1em;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.color_ui_background};
  z-index: 1;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.color_ui_text_main};
  text-align: center;
`;

export const Span = styled.span`
  color: ${props => props.theme.color_ui_text_main};
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 1em;
  top: 14px;
`;

export const EmptyCart = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  justify-content: center;
  margin-bottom: auto; 
  margin-top: auto;
  padding: 1em;
`;

export const H3 = styled.h3``;

export const P = styled.p`
  color: ${props => props.theme.color_ui_text_main};
  font-size: 0.9rem;
  max-width: 300px;
  text-align: center;
`;

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.color_primary_0};
  display: flex;
  font-size: 1rem;
  gap: 0.25em;
  padding: 0.5em;
`;

export const A = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_primary_0};
  color: ${props => props.theme.color_ui_text_contrast};
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  justify-content: center;
  padding: 0.75em 0;
  width: 100%;
  min-height: 63px;
  margin-top: 1em;
`;
