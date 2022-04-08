import styled from 'styled-components';
import { bp } from 'styles';
import { Wrapper as DropdownMenuWrapper } from '../DropdownMenu/styles';

interface Styles {
  isVisible?: boolean;
}

export const Div = styled.div<Styles>`
  border-bottom: 1px solid ${props => props.theme.color_neutral_0};
  background-color: ${props => props.theme.color_ui_background};
  position: absolute;
  width: 100%;
  ${props => props.isVisible ? 'top: 72px' : 'top: 0'};
  transition: top 0.3s;
  z-index: 9;

  @media (max-width: ${bp.tablet}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  align-items: center;
  color: ${props => props.theme.color_ui_text_main};
  display: flex;
  gap: 4.5em;
  list-style: none;
  margin: 0 auto;
  max-width: 1240px;
  padding: 0.75em 2em;

  @media (max-width: ${bp.tablet}) {
    gap: 0;
    justify-content: space-between;
  }
`;

export const Li = styled.li`
  cursor: pointer;
`;

export const P = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  white-space: nowrap;
`;

export const Dropdown = styled.div`
  position: relative;

  :hover ${DropdownMenuWrapper} {
    display: block;
  }
`;

export const Header = styled.section`
  align-items: center;
  display: flex;
  gap: 0.25em;
`;
