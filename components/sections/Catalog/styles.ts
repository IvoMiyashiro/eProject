import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  gap: 3em;
  margin-top: 5em;
  align-items: flex-start;
`;

export const Wrapper = styled.div``;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 2.5em;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
