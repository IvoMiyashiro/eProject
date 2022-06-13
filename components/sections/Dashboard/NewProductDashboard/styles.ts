import styled from 'styled-components';
import { bp } from 'styles';

export const Form = styled.form`
  display: grid;
  grid-template-columns: minmax(500px, 1fr) 350px;
  height: 100vh;
  gap: 1em;
  margin-top: 2em;

  @media (max-width: ${bp.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

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
  gap: 2em;
`;

