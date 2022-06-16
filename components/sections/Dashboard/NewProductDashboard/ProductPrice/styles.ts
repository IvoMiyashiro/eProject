import styled from 'styled-components';

export const Div = styled.div`
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

export const H3 = styled.h3`
  font-size: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5em;
`;

export const Section = styled.section`
  border-top: 1px solid ${props => props.theme.color_neutral_1};
  margin-top: 1em;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
