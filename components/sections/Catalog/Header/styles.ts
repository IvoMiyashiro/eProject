import styled from 'styled-components';
import { bp } from 'styles';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  box-shadow:
  0px 0px 1.1px rgba(0, 0, 0, 0.044),
  0px 0px 3.8px rgba(0, 0, 0, 0.066),
  0px 0px 17px rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  margin-bottom: 2em;
`;

export const Section = styled.section`
  display: flex;
  gap: 1em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Select = styled.select`
  padding: 0.25em 0.4em;
  border-radius: 4px;
`;
  
export const Option = styled.option``;

export const Label = styled.label`
  color: ${props => props.theme.color_ui_text_main};
  font-size: 0.9rem;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;

  :last-child {
    @media (min-width: ${bp.tablet}) {
      display: none;
    }
  }
`;
