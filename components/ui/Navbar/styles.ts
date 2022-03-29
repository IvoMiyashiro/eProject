import styled from 'styled-components';
import { bp } from 'styles';

interface Styles {
  isVisible?: boolean;
}

export const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10; 
`;

export const Nav = styled.div`
  position: relative;
`;

export const Div = styled.div<Styles>`
  background-color: ${props => props.theme.color_primary_0};
  position: relative;
  z-index: 10;
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
