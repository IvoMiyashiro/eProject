import styled from 'styled-components';

interface Styles {
  isActive: boolean;
}

export const Aside = styled.aside`
  background-color: ${props => props.theme.color_ui_background};
  border-right: 1px solid ${props => props.theme.color_neutral_2};
  height: 100vh;
  position: sticky;
  top: 0;
  width: 240px;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 1em;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const Li = styled.li`
  padding: 0.75em;
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

export const A = styled.a<Styles>`
  align-items: center;
  background-color: ${props => props.isActive ? props.theme.color_neutral_1 : 'transparent'};
  border-radius: 12px;
  color: ${props => props.theme.color_ui_text_main};
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  padding: 1em;
  text-decoration: none;
  transition: .2s ease;
  width: 100%;

  :hover {
    background-color: ${props => props.theme.color_neutral_1};
    transition: .2s ease;
  }
`;

export const Footer = styled.footer`
  padding: 0.75em;
  margin-top: auto;
`;

export const Button = styled.button`
  align-items: center;
  background-color: ${props => props.theme.color_neutral_1};
  border-radius: 12px;
  color: ${props => props.theme.color_ui_text_main};
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  padding: 1em;
  text-decoration: none;
  transition: .2s ease;
  width: 100%;
  border: none;
`;
