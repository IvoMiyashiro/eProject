import styled from 'styled-components';

interface Props {
  isFocus: boolean;
  error: boolean
}

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Div = styled.div<Props>`
  border-radius: 6px;
  border: 2px solid ${props => 
    props.error 
      ? props.theme.color_ui_danger 
      : props.isFocus
        ? props.theme.color_primary_0
        : props.theme.color_neutral_1
};
  background-color: ${props => 
    props.error 
      ? props.theme.color_ui_danger + '1A'
      : props.isFocus
        ? 'transparent'
        : props.theme.color_neutral_1
};
  overflow: hidden;
  padding: 0.5em;
  cursor: text;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
  
export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.9rem;
  background-color: transparent;
`;
  
export const Span = styled.span`
  color: ${props => props.theme.color_ui_danger};
  font-size: 0.8rem;
  margin-left: 1em;
  position: absolute;
  bottom: -18px;
`;

export const Label = styled.label<Props>`
  font-size: 0.75rem;
  color: ${props => 
    props.error 
      ? props.theme.color_ui_danger 
      : props.isFocus
        ? props.theme.color_primary_0
        : props.theme.color_ui_text_main
};
  cursor: text;
`;
