import styled from 'styled-components';

export const Form = styled.form``;

export const Div = styled.div`
  display: flex;
  gap: 1em;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.color_ui_text_main};
  position: absolute;
  right: 8px;
  top: 25px;
`;

export const LabelCard = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  padding: 0.25em 0.5em;
  background-color: #EDEFFB;
  border-radius: 4px;
  color: ${props => props.theme.color_primary_0};
`;

export const P = styled.p`
  font-size: 0.8rem;
`;

export const Span = styled.span`
  cursor: pointer;
`;
