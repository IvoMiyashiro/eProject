import styled from 'styled-components';

interface Props {
  type: 'danger' | 'ok' | 'warn';
}

export const Div = styled.div<Props>`
  align-items: center;
  background-color: ${props => 
    props.type === 'danger' 
      ? props.theme.color_ui_danger 
      : (props.type === 'ok') 
        ? props.theme.color_ui_ok_0 
        : props.theme.color_ui_warn};
  border-radius: 8px;
  bottom: 1.5em;
  display: flex;
  justify-content: center;
  padding: 1em;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 400px;
`;

export const P = styled.p`
  color: white;
`;
