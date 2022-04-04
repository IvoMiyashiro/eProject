import styled from 'styled-components';

export const Div = styled.div`
  align-items: center;
  display: flex;
  gap: 0.25em;
`;
  
export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  background-color: ${props => props.theme.color_tertiary_0};
  border-radius: 50%;
  border: none;
  display: flex;
  font-family: sans-serif;
  font-size: 0.9rem;
  height: 20px;
  justify-content: center;
  padding: 0;
  width: 20px;
  
  :first-child {
    padding-bottom: 0.13em;
  }
`;

export const Input = styled.input`
  -moz-appearance: textfield;
  border: none;
  font-family: 'Inter';
  font-size: 0.9rem;
  height: 25px;
  outline: none;
  text-align: center;
  width: 25px;

  :disabled {
    background-color: transparent;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
