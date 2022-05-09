import styled from 'styled-components';

export const Table = styled.table`
  border-spacing:0;
  box-shadow:
  0px 0px 1.4px rgba(0, 0, 0, 0.011),
  0px 0px 3.4px rgba(0, 0, 0, 0.016),
  0px 0px 6.4px rgba(0, 0, 0, 0.02),
  0px 0px 11.4px rgba(0, 0, 0, 0.024),
  0px 0px 21.3px rgba(0, 0, 0, 0.029),
  0px 0px 51px rgba(0, 0, 0, 0.04);
  border-collapse: collapse;
  border-radius: 8px;
  margin-top: 2em;
  overflow: auto;
  width: 100%;
`;

export const THead = styled.thead`
  border-bottom: 1px solid ${props => props.theme.color_neutral_1};
`;

export const Tr = styled.tr`
  border-radius: 4px;
  border-bottom: 1px solid ${props => props.theme.color_neutral_1};
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

export const TBody = styled.tbody``;

export const Td = styled.td`
  font-size: 0.9rem;
  height: 50px;
  padding: 0 1.2em;
  white-space: nowrap;
`;
