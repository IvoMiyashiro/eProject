import styled from 'styled-components';
import { bp } from 'styles';
import { Wrapper as DropdownMenuWrapper } from './DropdownMenu/styles';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10; 
`;

export const Div = styled.div`
  :first-child {
    background-color: ${props => props.theme.color_primary_0};
  }

  :last-child {
    border-bottom: 1px solid ${props => props.theme.color_neutral_0};

    @media (max-width: ${bp.tablet}) {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: grid;
  gap: 10em;
  grid-template-columns: 1fr 115px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding: 1em 2em;

  @media (max-width: ${bp.tablet}) {
    gap: 0;
  }
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  :first-child {
    display: grid;
    grid-template-columns: 200px minmax(250px, 1fr);

    @media (max-width: ${bp.tablet}) {
      display: flex;
      justify-content: space-between;
    }
  }

  :last-child {
    gap: 1.25em;
  }
`;

export const Ul = styled.ul`
  align-items: center;
  color: ${props => props.theme.color_ui_text_main};
  display: flex;
  gap: 4.5em;
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
