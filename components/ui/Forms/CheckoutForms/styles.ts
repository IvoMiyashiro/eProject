import styled from 'styled-components';

export const Form = styled.form``;

export const H1 = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.25em;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const Span = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.color_ui_danger};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
