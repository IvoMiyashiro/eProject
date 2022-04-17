import styled from 'styled-components';
import { bp } from 'styles';

export const Div = styled.div`
align-items: center;
display: flex;
gap: 0.5em;
height: 40px;

@media (max-width: ${bp.tablet}) {
  display: none;
}
`;

export const Input = styled.input`
border-radius: 2px;
border: none;
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

export const SearchBox = styled.div`
  background-color: ${props => props.theme.color_ui_background};
  border-radius: 4px;
  box-shadow:
  0px 0px 1.1px rgba(0, 0, 0, 0.044),
  0px 0px 3.8px rgba(0, 0, 0, 0.066),
  0px 0px 17px rgba(0, 0, 0, 0.11);
  min-height: 100px;
  position: absolute;
  top: 65px;
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const SpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Section = styled.section`
  align-items: center;
  border-top: 1px solid ${props => props.theme.color_neutral_0};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.75em;
  padding-bottom: 0;
`;

export const P = styled.p`
  font-size: 0.8rem;
`;
