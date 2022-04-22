import styled from 'styled-components';

interface Styles {
  isSelected: boolean;
}

export const Label = styled.label<Styles>`
  align-items: center;
  border-left: 4px solid ${props => props.isSelected ? props.theme.color_primary_2 : 'transparent'};
  border-radius: 4px;
  display: flex;
  gap: 1em;
  height: 80px;
  padding: 0 2em;
  box-shadow:
  0px 0px 1.4px rgba(0, 0, 0, 0.011),
  0px 0px 3.4px rgba(0, 0, 0, 0.016),
  0px 0px 6.4px rgba(0, 0, 0, 0.02),
  0px 0px 11.4px rgba(0, 0, 0, 0.024),
  0px 0px 21.3px rgba(0, 0, 0, 0.029),
  0px 0px 51px rgba(0, 0, 0, 0.04);
  transition: 0.2s;
  cursor: pointer;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Span = styled.span`
  color: ${props => props.theme.color_ui_ok_0};
  margin-left: auto;
`;

export const Input = styled.input``;

export const P = styled.p``;
