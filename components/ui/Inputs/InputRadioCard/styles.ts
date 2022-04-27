import styled from 'styled-components';

interface Styles {
  isSelected: boolean;
  isHover: boolean;
}

export const Label = styled.label<Styles>`
  align-items: center;
  background-color: ${props => props.isHover ? props.theme.color_neutral_1 : 'transparent'};
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

  :nth-child(2) {
    margin-left: 0.5em;
  }
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

export const IconWrapper = styled.div`
  background-color: ${props => props.theme.color_neutral_1};
  padding: 0.6em 0.7em;
  border-radius: 100%;
  color: ${props => props.theme.color_primary_0};
`;

export const Input = styled.input``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const P = styled.p``;

export const Text = styled.p`
    font-size: 0.8rem;
    color: ${props => props.theme.color_neutral_2};
`;

