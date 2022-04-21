import styled from 'styled-components';
import { bp } from 'styles';

export const Aside = styled.aside`
  display: flex;
  border-radius: 4px;
  box-shadow:
  0px 0px 1.1px rgba(0, 0, 0, 0.044),
  0px 0px 3.8px rgba(0, 0, 0, 0.066),
  0px 0px 17px rgba(0, 0, 0, 0.11);
  flex-direction: column;
  gap: 1.25em;
  padding: 1.25em;
  width: 100%;
  background-color: ${props => props.theme.color_ui_background};

  @media (max-width: ${bp.tablet}) {
    max-width: 285px;
    height: 550px;
    overflow-y: scroll;
  }
`;

export const Div = styled.div``;

export const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;

export const Section = styled.section`
  margin-top: 0.75em;
`;

export const Input = styled.input`
  margin-right: 0.25em;
`;

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.8rem;
  gap: 0.25em;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  height: 30px;
  margin-top: 1em;
`;

export const ButtonWrapper = styled.div`
  height: 25px;
  width: 100%;
  margin-top: 1em;
  display: flex;
  justify-content: flex-end;
`;

export const ReasetButtonWrapper = styled.div`
  width: 100%;
  height: 30px;
`;
