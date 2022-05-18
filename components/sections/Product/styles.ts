import { bp } from 'styles';
import styled from 'styled-components';

export const Div = styled.div`
  box-shadow:
  0px 0px 1.1px rgba(0, 0, 0, 0.044),
  0px 0px 3.8px rgba(0, 0, 0, 0.066),
  0px 0px 17px rgba(0, 0, 0, 0.11);
  border-radius: 12px;
  padding: 2em;

  @media (max-width: ${bp.mobile}) {
    padding: 1em;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  gap: 3em;
  position: relative;
  align-items: flex-start;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const TabSection = styled.div`
  margin-top: 7em;
`;

export const ProductImageWrapper = styled.div`
  position: sticky;
  top: 90px;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: relative;
    top: 0;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Span = styled.span`
  color: ${props => props.theme.color_primary_0};
  font-size: 0.9rem;
`;
