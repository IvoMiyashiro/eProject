import styled from 'styled-components';

interface Styles {
  isOpen: boolean;
}

export const Div = styled.div`
  position: relative;
  margin-top: auto;
`;

export const Ul = styled.ul<Styles>`
  position: absolute;
  list-style: none;
  bottom: ${props => props.isOpen ? '80px' : '-280px'};
  background-color: ${props => props.theme.color_primary_1};
  width: 100%;
  border-radius: 4px;
  transition: 0.2s;
  z-index: -1;
  overflow: hidden;
`;

export const Li = styled.li`
  cursor: pointer;
  padding: 0.75em 1em;
  transition: 0.1s;
  
  :hover {
    background-color: ${props => props.theme.color_primary_2};
    transition: 0.1s;
  }

  :last-child {
    border-top: 1px solid ${props => props.theme.color_primary_2};
  }

  :first-child {
    border-bottom: 1px solid ${props => props.theme.color_primary_2};
  }
`;

export const CustomerCardWrapper = styled.div<Styles>`
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5em;
  transition: 0.2s;
  background-color: ${props => props.isOpen ? props.theme.color_primary_1 : ''};

  :hover {
    background-color: ${props => props.theme.color_primary_1};
    transition: 0.2s;
  }
`;

export const A = styled.a`
  align-items: center;
  display: flex;
  gap: 0.5em;
  justify-content: space-between;
  text-decoration: none;
`;

export const Span = styled.span`
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 0.9rem;
  white-space: nowrap;
`;

export const Dashboard = styled.div`
  cursor: pointer;
  padding: 0.75em 1em;
  transition: 0.1s;
  border-top: 1px solid ${props => props.theme.color_primary_2};

  :hover {
    background-color: ${props => props.theme.color_primary_2};
    transition: 0.1s;
  }
`;
