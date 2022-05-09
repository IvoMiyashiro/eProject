import styled from 'styled-components';

interface Props {
  numOfTr: number;
  numOfTd: number;
}

export const TableSkeleton = ({ numOfTr, numOfTd }: Props) => {
  const tr = Array.from(Array(numOfTr).keys());
  const td = Array.from(Array(numOfTd).keys());
  return (
    <>
      {
        tr.map((row, i) => {
          return(
            <Tr key={i}>
              {
                td.map((data, i) => {
                  return (
                    <Td key={i}>
                      <Div />
                    </Td>
                  );
                })
              }
            </Tr>
          );
        })
      }
    </>
  );
};

const Tr = styled.tr`
  border-radius: 4px;
  border-bottom: 1px solid ${props => props.theme.color_neutral_1};
  height: 40px;
`;
  
const Td = styled.td`
  font-size: 0.9rem;
  height: 50px;
  padding: 0 1.2em;
  white-space: nowrap;
`;

const Div = styled.div`
  height: 20px;
  width: 80px;
  background-color: ${props => props.theme.color_neutral_1};
  border-radius: 4px;
`;
