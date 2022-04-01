import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: -10px;
  padding-left: 12.3em;
  display: none;
`;
  
export const Ul = styled.ul`
  background-color: ${props => props.theme.color_primary_0};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 1.25em;
`;

export const Li = styled.li``;

export const P = styled.p`
  font-size: 0.9rem;
  white-space: nowrap;
`;
