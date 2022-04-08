import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 480px;
  min-width: 480px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`;

export const Wrapper = styled.section`
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: 450px;
  min-width: 475px;
`;

export const ImageContainer = styled.div`
  height: 450px;
  min-width: 475px;
  position: relative;
`;
