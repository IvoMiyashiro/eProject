import styled from 'styled-components';

export const Div = styled.div`
  border-top: 1px solid ${props => props.theme.color_neutral_0};
  margin-top: 1em;
  padding-top: 2em;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const Span = styled.span`
  position: absolute;
  top: -10px;
  background-color: ${props => props.theme.color_ui_background};
  text-align: center;
  padding: 0 0.5em;
  font-size: 0.9rem;
  color: ${props => props.theme.color_neutral_2};
`;

export const ButtonWrapper = styled.div`
  height: 57px;
  width: 100%;
`;
