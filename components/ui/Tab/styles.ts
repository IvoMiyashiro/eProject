import { bp } from 'styles';
import styled from 'styled-components';

interface Styles {
  isActive: boolean
}

export const Div = styled.div`
  position: relative;
`;

export const Nav = styled.nav`
  position: absolute;
  top: -44px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Li = styled.li<Styles>`
  align-items: center;
  background-color: ${props => props.isActive ? props.theme.color_ui_background : props.theme.color_neutral_1};
  border: 1px solid ${props => props.theme.color_neutral_0};
  border-top: ${props => props.isActive ? '3px solid' + props.theme.color_primary_0 : '1px solid' + props.theme.color_neutral_2};
  border-right: 0px;
  border-bottom: 0px;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  text-align: center;
  width: 125px;

  :last-child {
    border-right: 1px solid ${props => props.theme.color_neutral_0};;
  }

  ${props => props.isActive ? 'color:' + props.theme.color_primary_0 : ''};
  ${props => props.isActive ? 'font-weight: 600' : ''};
`;

export const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.color_neutral_0};
  padding: 2em;

  @media (max-width: ${bp.mobile}) {
    padding: 1em;
  }
`;

