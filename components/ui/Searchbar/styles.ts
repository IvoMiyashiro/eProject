import styled from 'styled-components';
import { bp } from 'styles';

interface Styles {
  withBorder: boolean;
}

export const Form = styled.form`
  align-items: center;
  display: flex;
  gap: 0.5em;
  height: 40px;

@media (max-width: ${bp.tablet}) {
  display: none;
}
`;

export const Input = styled.input<Styles>`
  border-radius: 4px;
  border: 1px solid ${props => props.withBorder ? props.theme.color_neutral_0 : 'transparent'};
  height: 100%;
  outline: none;
  padding: 0 1em;
  transition: 0.2s ease-in-out;
  width: 100%;
`;

export const InputWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;
