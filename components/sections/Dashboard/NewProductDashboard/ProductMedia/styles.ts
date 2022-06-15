import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2em 1.5em;
  box-shadow:
    0px 0px 1.4px rgba(0, 0, 0, 0.011),
    0px 0px 3.4px rgba(0, 0, 0, 0.016),
    0px 0px 6.4px rgba(0, 0, 0, 0.02),
    0px 0px 11.4px rgba(0, 0, 0, 0.024),
    0px 0px 21.3px rgba(0, 0, 0, 0.029),
    0px 0px 51px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  position: relative;
`;

export const Container = styled.div`
  align-items: center;
  border-radius: 4px;
  border: 2px dashed ${props => props.theme.color_neutral_0};
  cursor: pointer;
  display: flex;
  gap: 1em;
  justify-content: center;
  min-height: 250px;
  position: relative;
  width: 100%;
  padding: 1em;

  :hover {
    border: 2px dashed ${props => props.theme.color_primary_0};
  }
`;

export const H3 = styled.h3`
  font-size: 1rem;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input``;

export const ErrorContainer = styled.div`
  border: 2px solid ${props => props.theme.color_ui_danger};
  background-color: ${props => props.theme.color_ui_danger + '1A'};
  font-size: 0.9rem;
  padding: 0.75em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: -0.25em;
  right: 0.5em;
`;

export const P = styled.p`
  color: ${props => props.theme.color_ui_danger};
`;
