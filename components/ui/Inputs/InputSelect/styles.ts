import styled from 'styled-components';

interface Props {
  isFocus: boolean;
  error: boolean
}

export const Div = styled.div`
  width: 100%;
  position: relative;
  height: 57px;
`;

export const Section = styled.section<Props>`
  border-radius: 6px;
  border: 2px solid ${props => 
    props.error 
      ? props.theme.color_ui_danger 
      : props.isFocus
        ? props.theme.color_primary_0
        : props.theme.color_neutral_1};
  background-color: ${props => 
    props.error 
      ? props.theme.color_ui_danger + '1A'
      : props.isFocus
        ? 'transparent'
        : props.theme.color_neutral_1};
  overflow: hidden;
  padding: 0.5em;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

export const Label = styled.label<Props>`
  font-size: 0.75rem;
  color: ${props => 
    props.error 
      ? props.theme.color_ui_danger 
      : props.isFocus
        ? props.theme.color_primary_0
        : props.theme.color_ui_text_main};
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  height: 100%;
  margin: 0;
  outline: none;
  padding: 0;
  width: 100%;
`;

export const Ul = styled.ul`
  background-color: ${props => props.theme.color_ui_background};
  border-radius: 4px;
  box-shadow:
  0px 0px 1.4px rgba(0, 0, 0, 0.011),
  0px 0px 3.4px rgba(0, 0, 0, 0.016),
  0px 0px 6.4px rgba(0, 0, 0, 0.02),
  0px 0px 11.4px rgba(0, 0, 0, 0.024),
  0px 0px 21.3px rgba(0, 0, 0, 0.029),
  0px 0px 51px rgba(0, 0, 0, 0.04);
  font-size: 0.9rem;
  list-style: none;
  margin-top: 1em;
  max-height: 350px;
  overflow-y: scroll;
  padding: 0.5em 0em;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const Li = styled.li`
  cursor: pointer;
  font-size: 0.85rem;
  height: 30px;
  padding: 0.5em 1em;
  width: 100%;

  :hover {
    background-color: ${props => props.theme.color_neutral_1};
  }
`;

export const Span = styled.span`
  color: ${props => props.theme.color_ui_danger};
  font-size: 0.8rem;
  margin-left: 1em;
  position: absolute;
  bottom: -18px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -6px;
`;
