import styled from 'styled-components';

interface Styles {
  rowLink?: boolean;
}

export const Div = styled.div`
  overflow-x: auto;
  padding-bottom: 3em;
`; 

export const Table = styled.table`
  border-radius: 8px;
  border-spacing:0;
  border: 1px solid ${props => props.theme.color_neutral_1};
  width: 100%;
`;

export const THead = styled.thead`
`;

export const Tr = styled.tr<Styles>`
  border-radius: 4px;
  transition: 0.1s;
  ${props => props.rowLink
    ? `
    :hover {
      cursor: pointer;
      background-color: ${props.theme.color_neutral_1};
      transition: 0.1s ease;
    }
  ` : ''}
`;

export const Th = styled.th`
  font-weight: 600;
  height: 50px;
  padding: 0 1em;
  text-align: left;
  white-space: nowrap;

  :first-child {
    width: 100px; 
  }
`;

export const TBody = styled.tbody`
  position: relative;
`;

export const Td = styled.td`
  border-top: 1px solid ${props => props.theme.color_neutral_1};
  font-size: 0.9rem;
  height: 50px;
  padding: 0 1.2em;
  white-space: nowrap;
`;
