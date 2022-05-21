import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${props => props.theme.color_ui_background};
  max-width: 300px;
  border-radius: 8px;
  padding: 1.5em;
`;

export const H2 = styled.h2`
  text-align: left;
  font-weight: 600;
`;

export const Div = styled.div`
  height: 35px;
`;

export const P = styled.p`
  font-size: .9rem;
  text-align: left;
  margin-top: 0.5em;
  margin-bottom: 1.5em;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;
