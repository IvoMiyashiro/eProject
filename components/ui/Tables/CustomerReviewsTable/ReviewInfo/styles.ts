import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${props => props.theme.color_ui_background};
  padding: 1.5em;
  border-radius: 4px;
  text-align: left;
  max-width: 450px;
  min-width: 450px;
`;

export const H2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const H3 = styled.h3`
  font-size: 1rem;
`;

export const Section = styled.section`
  background-color: ${props => props.theme.color_neutral_1};
  padding: .5em;
  border-radius: 6px;
`;

export const P = styled.p`
  font-size: 0.9rem;
`;

export const ButtonWrapper = styled.div`
  width: 125px;
  margin-left: auto;
  height: 35px;
  margin-top: 1em;
`;
