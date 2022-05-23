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

export const Section = styled.section`
  position: relative;
`;

export const H2 = styled.h2`
  font-size: 1.15rem;
  margin-bottom: 0.5em;
`;

export const Span = styled.span`
  color: ${props => props.theme.color_ui_danger};
  font-size: 0.8rem;
  margin-left: 1em;
  position: absolute;
  bottom: -18px;
`;
