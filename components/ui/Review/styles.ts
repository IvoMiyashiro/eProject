import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  grid-template-columns: 175px 1fr;
  gap: 2em;
  margin-bottom: 2em;
  border-bottom: 1px solid ${props => props.theme.color_neutral_1};
  padding-bottom: 2em;

  :last-child {
    border: none;
    padding: 0;
  }
`;

export const Wrapper = styled.div``;



