import styled from 'styled-components';

export const Div = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: -72px;
`;

export const Section = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr 400px;
  justify-items: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 2em;
`;

export const Wrapper = styled.div`
  padding-top: 7em;
  padding-bottom: 2em;
`;
