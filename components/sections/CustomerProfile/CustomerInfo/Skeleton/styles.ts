import styled from 'styled-components';

export const Div = styled.div`
  height: 20px;
  width: 300px;
  background-color: ${props => props.theme.color_neutral_1};
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  gap: 0.5em;
`;
