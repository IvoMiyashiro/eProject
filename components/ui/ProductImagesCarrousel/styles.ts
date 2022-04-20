import { bp } from 'styles';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 480px;
  min-width: 480px;

  @media (max-width: ${bp.tablet}) {
    max-width: 400px;
    min-width: 400px;
  }

  @media (max-width: ${bp.mobile}) {
    min-width: 275px;
    max-width: 275px;
  }
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
  height: 350px;
  min-width: 475px;

  @media (max-width: ${bp.tablet}) {
    height: 300px;
    min-width: 390px;
  }

  @media (max-width: ${bp.mobile}) {
    min-width: 275px;
    max-width: 275px;
  }
`;

export const ImageContainer = styled.div`
  height: 350px;
  min-width: 475px;
  position: relative;

  @media (max-width: ${bp.tablet}) {
    height: 300px;
    min-width: 390px;
  }

  @media (max-width: ${bp.mobile}) {
    min-width: 275px;
    max-width: 275px;
  }
`;
