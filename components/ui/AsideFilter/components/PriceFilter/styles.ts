import styled from 'styled-components';

export const Div = styled.div``;
  
export const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;
  
export const InputRange = styled.input``;

export const InputNumber = styled.input`
  -moz-appearance: textfield;
  padding: 0.5em;
  font-size: 0.75rem;
  width: 100px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  font-size: 0.75rem;
  color: ${props => props.theme.color_neutral_2};
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  margin-top: 0.75em;
  gap: 0.25em;
`;

export const Wrapper = styled.section`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Error = styled.div`
  margin-top: 0.75em;
`;

export const Span = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.color_ui_danger};
`;
