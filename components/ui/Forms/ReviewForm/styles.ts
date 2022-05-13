import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  background-color: ${props => props.theme.color_ui_background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  min-height: 500px;
  min-width: 300px;
  width: 600px;
`;

export const SpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding: 1.5em;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 150px;
  height: 40px;
  margin: 1.5em;
  margin-left: auto;
`;
