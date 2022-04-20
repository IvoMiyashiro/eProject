import styled from 'styled-components';
import { Wrapper as SubDropdownMenuWrapper } from '../SubDropdownMenu/styles';

export const Wrapper = styled.div`
  display: none;
  padding-top: 1.5em;
  position: absolute;
`;

export const Ul = styled.ul`
  background-color: ${props => props.theme.color_primary_0};
  border-radius: 4px;
  list-style: none;
  overflow: hidden;
  padding: 0.5em 0;
`;

export const Li = styled.li`
  color: ${props => props.theme.color_ui_text_contrast};
  padding: 0.75em 1em;
  transition: 0.1s;

  :hover {
    background-color: ${props => props.theme.color_primary_2};
    transition: 0.1s;
  }
`;

export const P = styled.p`
  font-size: 0.9rem;
  white-space: nowrap;
`;

export const Div = styled.div`
  position: relative;

  :hover ${SubDropdownMenuWrapper}{
    display: block;
  }
`;

export const Section = styled.section`
  align-items: center;
  justify-content: space-between;
  display: flex;
  gap: 2em;
`;
