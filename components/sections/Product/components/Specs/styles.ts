import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-bottom: 1px solid ${props => props.theme.color_neutral_1};
  margin-bottom: 2em;

  :last-child {
    margin: 0;
  }
`;
  
export const Caption = styled.caption`
  font-weight: 600;
  text-align: start;
  margin-bottom: 0.5em;
`;
  
export const TBody = styled.tbody``;
  
export const Tr = styled.tr`
  height: 45px;
`;
  
export const Th = styled.th`
  text-align: start;
  background-color: ${props => props.theme.color_neutral_1};
  width: 200px;
  padding: 0 1em;
  font-weight: 400;
  font-size: 0.9rem;
  `;
  
export const Td = styled.td`
  padding: 0 1em;
  font-size: 0.9rem;
  border-top: 1px solid ${props => props.theme.color_neutral_1};
`;
