import styled from 'styled-components';

export const Div = styled.div`
  padding-bottom: 2em;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 100px 150px 150px;
  margin: 2em 0;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.color_neutral_0};
  height: 100%;
  outline: none;
  padding: 0 1em;
  transition: 0.2s ease-in-out;
  width: 100%;
`;
